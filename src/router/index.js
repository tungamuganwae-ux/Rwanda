import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/homeview.vue';
import About from "../views/About.vue";
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Eastern from '../views/Eastern.vue';
import Western from '../views/Western.vue';
import Northern from '../views/Northern.vue';
import Southern from '../views/Southern.vue';
import Kigali from '../views/Kigali.vue';
import Videos from '../views/Videos.vue';
import Photos from '../views/Photos.vue'
const routes = [
  {
    path: '/',
    name: 'homeviews',
    component: home
  },
{
  path:'/about',
  name:'About',
  component: About
},
{
  path:'/contact',
  name:'Contact',
  component:Contact
},
{
  path:'/services',
  name:'Services',
  component:Services
},
{
    path: '/eastern',
    name: 'Eastern Province',
    component: Eastern
  },

  {
path: '/western',
name: 'Western Province',
component: Western
  },

  {
    path:'/northern',
    name:'Northern Province',
    component:Northern
  },
  {
     path:'/southern',
     name:'Southern Province',
     component:Southern 
  },
  {
    path:'/kigali',
    name:'Kigali City',
    component:Kigali
  },
  {
    path:'/videos',
    name:'Videos',
    component:Videos
  },
  {
    path:'/photos',
    name:'Photos',
    component:Photos
  }
  
];

const router = createRouter(
  {
  history: createWebHistory(),
  routes,
  });
  

export default router ;