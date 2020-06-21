import Vue from 'vue';

import './styles/quasar.sass';
import iconSet from 'quasar/icon-set/fontawesome-v5';
import lang from 'quasar/lang/pt-br';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QAvatar,
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QAvatar,
  },
  directives: {},
  plugins: {},
  lang,
  iconSet,
});
