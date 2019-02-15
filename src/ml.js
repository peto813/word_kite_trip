//multilanguage settings file

import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: 'English',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('English').create({
      reservations: 'Reservations',
      destinations: 'Destinations',
      getStarted: 'Book now!',

      oldPwd: 'Contraseña anterior',
      confirm:'Confirm',
      login: 'Login',
      home:'Home',
      register:'Register',
      faq: 'Faq',
      lang:'Language',
      langShort:'en',
      accounts:'Accounts',
      properties: 'Properties',
      profile:'Profile',
      signOut:'Sign Out',
      invoices: 'Invoices',
      payments: 'Payments',
      username:'Username',
      password:'Password',
      signUp:'Sign Up',
      email:'E-mail',
      forgot:'Forgot Password?',
      contact:'Contact',
      createAcc:'Create Account',
      alreadyAcc:'Already have an account?',
      pwdRecovery: 'Password Recovery',
      recover: 'Recover',
      landingPageWelcome: 'Breathtaking destinations, a click away',
      
      legalName:'Legal name',
      terms:'I accept the terms and use',
      fiscalProof : 'Fiscal number proof',
      landingFeature1: 'Manage your Condo',
      landingFeature2: 'Register your payments',
      landingFeature3: 'Oversee finances',
      landingFeature4:'Save the planet',
      socialMedia: 'Get connected with us on social networks!',
      help:'Help',
      name:'name',
      pwdChange:'Password Change',
      change:'Change',
      questions:'Questions'
    }),
    new MLanguage('Español').create({
      reservations:'Reservaciones',
      destinations: 'Destinos',
      getStarted: '|Reserva ahora!',


      oldPwd: 'Contraseña anterior',
      login: 'Ingresar',
      home:'Inicio',
      register:'Registro',
      faq: 'Preguntas',
      lang:'Idioma',
      langShort:'es',
      accounts:'Cuentas',
      properties: 'Inmuebles',
      profile:'Perfil',
      signOut:'Salir',
      invoices: 'Facturas',
      payments: 'Pagos',
      username:'Usuario',
      password:'Contraseña',
      signUp:'Registro',
      email:'Correo Electronico',
      forgot:'¿Olvido contraseña?',
      contact:'Contacto',
      createAcc:'Crear Cuenta',
      alreadyAcc:'¿Ya posees una cuenta?',
      pwdRecovery: 'Recuperacion de contraseña',
      recover: 'Recuperar',
      landingPageWelcome: 'Destinos increibles, a un click de distancia',
      legalName:'Razon Social',
      terms:'Acepto los terminos de uso',
      fiscalProof : 'Comprobante fiscal',
      landingFeature1: 'Administre su condominio',
      landingFeature2: 'Efectue pagos',
      landingFeature3: 'Siga las finanzas',
      landingFeature4:'Salva al planeta',
      socialMedia:'¡Conactate por las redes sociales!',
      help:'Ayuda',
      name:'nombre',
      pwdChange:'Cambio de contraseña',
      change:'Cambiar',
      questions:'Preguntas'
    }),
 
    // new MLanguage('portuguese').create({
    //   //title: 'Oi {0}!',
    //   //msg: 'Você tem {f} amigos e {l} curtidas',
    //   home:''
    // })


  ]
})