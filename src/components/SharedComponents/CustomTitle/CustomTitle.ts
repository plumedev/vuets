// On importe le décorateur 'Options' et la classe de base 'Vue' du module 'vue-class-component'.
import { Options, Vue } from 'vue-class-component';

// Le décorateur 'Options' est utilisé pour définir les options du composant.
@Options({
  // 'props' est utilisé pour définir les propriétés que le composant peut accepter de ses composants parents.
  props: {
    // 'content' est une prop de type String, elle est obligatoire.
    content: {
      type: String,
      required: true,
    },
    // 'type' est une prop de type String, elle n'est pas obligatoire et par défaut, elle a la valeur 'h1'.
    type: {
      type: String,
      default: 'h1',
      // 'validator' est une fonction qui valide la valeur de la prop. Ici, elle vérifie que la valeur de
      // 'type' est l'une des balises d'en-tête HTML valides ('h1', 'h2', 'h3', 'h4', 'h5', 'h6').
      validator: (value: string) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
  },
  // 'template' est utilisé pour définir le modèle HTML du composant. Ici, il utilise dynamiquement la prop
  // 'type' comme la balise HTML et la prop 'content' comme le contenu de la balise.
  template: `
    <component :is="type">{{ content }}</component>
  `,
})
// On définit une classe 'CustomTitle' qui hérite de 'Vue' et qui est exportée par défaut.
// Cette classe représente le composant Vue.
export default class CustomTitle extends Vue {}
