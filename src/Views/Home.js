import React from 'react';

import MyProfile from '../Components/MyProfile'
import Experiences from "../Components/Experiences";
import Loader from "../Components/Loader";
import Academics from "../Components/Academics";
import Courses from "../Components/Courses";
import Api from '../Api'

const experiences = [
  {
    "id": 1,
    "place": "Farmacia Balen",
    "app": "Sistema de control y ventas de medicamentos con facturación computarizada (Aplicación Web)",
    "boos": "Dr. Juan Carlos",
    "reference": "65310613",
    "link": ""
  },
  {
    "id": 2,
    "place": "HUARI CBN",
    "app": "Sistema de Gestión de Accesos por medio de Inducciones de Seguridad con control de códigos QR. – Aplicación Web Progresiva",
    "boos": "Ing. Iván Mayorga",
    "reference": "72515165",
    "link": "https://sga.portal-huari.com"
  },
  {
    "id": 3,
    "place": "IGNAMAR",
    "app": "Sistema de control de activos – Aplicación Web",
    "boos": "Ing. Gabriel Ignacio Marzana",
    "reference": "72461508",
    "link": ""
  },
  {
    "id": 4,
    "place": "Joyeria Rosario",
    "app": "Sistema de Ventas de Joyas y Control de Préstamos (Aplicación Web)",
    "boos": "",
    "reference": "",
    "link": "https://joyasrosario.com/"
  },
  {
    "id": 5,
    "place": "ENALBO CBN",
    "app": "Software de Gestión y Predicción de Fallas de Máquinas – Aplicación Web",
    "boos": "Ing. José Peréz",
    "reference": "72461508",
    "link": ""
  },
]

const academics = [
  {
    id: 1,
    title: 'Ingeniería Informática',
    university: 'Universidad Técnica de Oruro',
    place: 'Oruro - Bolivia'
  },
  {
    id: 2,
    title: 'Analista de Sistemas',
    university: 'INTJEM',
    place: 'Oruro - Bolivia'
  },
  {
    id: 3,
    title: 'Cientifico de Datos',
    university: 'Platzi',
    place: 'Colombia'
  },
]

const courses = [
  {
    kind: 'Curso/Taller',
    title: 'Expositor de Curso de framework Laravel 6.0',
    place: 'UPEA',
    date: 'La Paz, 21 de Septiembre de 2019',
  },
  {
    kind: 'Curso',
    title: 'Organizador del campamento de programación (cursos y competencias) Oruro 2017 la 5ta versión',
    place: 'UTO – FNI',
    date: 'Oruro 18 - 23 de Septiembre de 2017',
  },
  {
    kind: 'Curso',
    title: 'Participación del campamento de programación (cursos y competencias) Oruro 2017 la 5ta versión.',
    place: 'UTO – FNI',
    date: 'Oruro, 18 – 23 de septiembre de 2017',
  },
  {
    kind: 'Taller',
    title: 'Participación del campamento de programación (cursos y competencias) Oruro 2017 la 5ta versión.',
    place: 'UTO – FNI',
    date: 'Oruro, 18 – 23 de septiembre de 2017',
  },
  {
    kind: 'Taller',
    title: 'Taller de capacitación en MikroTik, organizado por la sociedad de Ingenieros de Bolivia.',
    place: 'SIB',
    date: 'Oruro, 18 de septiembre de 2017',
  },
  {
    kind: 'Seminario',
    title: 'Asistencia a las jornadas académicas organizado por la carrera de ingeniería de sistemas e Informática.',
    place: 'UTO - FNI',
    date: 'Oruro, 12 – 14 de Junio de 2017',
  },
  {
    kind: 'Curso',
    title: 'Conclusión del programa de Lectura Efectiva para el Aprendizaje con comprensión organizada y metodologías de estudio.',
    place: '7Seven Company',
    date: 'Oruro, 15 de Mayo de 2017',
  },
  {
    kind: 'Taller',
    title: 'Administración de Base de Datos en PostgreSQL.',
    place: 'UTO - FNI',
    date: 'Oruro, 29 de Mayo de 2017 al 8 de Junio del 2017',
  },
  {
    kind: 'Curso',
    title: 'Aplicaciones de control en la simulación de sistemas robóticos.',
    place: 'UTO - FNI',
    date: 'Oruro, 16 - 26 de Mayo de 2017',
  },
  {
    kind: 'Taller',
    title: 'Paseo – Arduino Day.',
    place: 'UTO - FNI',
    date: 'Oruro, 31 de Marzo de 2017 a 1 de Abril de 2017',
  },
  {
    kind: 'Taller',
    title: 'Capacitación en Laravel.',
    place: 'SIB',
    date: 'Oruro, 13 – 21 de Marzo de 2017',
  },
  {
    kind: 'Curso',
    title: 'Curso de Oracle para Ingenieros',
    place: 'SIB',
    date: 'Oruro, 29 de Noviembre de 2016 a 2 de Diciembre de 2016',
  }
]

class Home extends React.Component {
  state = {
    experiences: '',
    loadingExperience: true,
    ErrorExperience: null,
    academics : '',
    loadingAcademic: true,
    ErrorAcademic: null,
    courses: '',
    loadingCourse: true,
    ErrorCourse: null,
  }

  componentDidMount(){
    this.experienceIndex()
    this.academicIndex()
    this.courseIndex()
  }

  experienceIndex = async () => {
    this.setState({
      loadingExperience: true,
      errorExperience: null
    })
    try {
      // const data = await Api.experiences.index();
      // console.log(data)
      this.setState({
        loadingExperience: false,
        experiences: experiences
      })
    }catch (error) {
      this.setState({
        loadingExperience: false,
        errorExperience: error
      })
    }
  }

  academicIndex = async () => {
    this.setState({
      loadingAcademic: true,
      errorAcademic: null
    })
    try {
      // const data = await Api.experiences.index();
      // console.log(data)
      this.setState({
        loadingAcademic: false,
        academics: academics
      })
    } catch (error) {
      this.setState({
        loadingAcademic: false,
        errorAcademic: error
      })
    }
  }

  courseIndex = async () => {
    this.setState({
      loadingCourse: true,
      errorCourse: null
    })
    try {
      // const data = await Api.experiences.index();
      // console.log(data)
      this.setState({
        loadingCourse: false,
        courses: courses
      })
    } catch (error) {
      this.setState({
        loadingCourse: false,
        errorCourse: error
      })
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.experience}
        <h1 className="text-muted text-center">MARCELO CHOQUE PACHECO</h1>
        <div className="row">
          <div className="col-md-3">
            <MyProfile/>
          </div>
          <div className="col-md-9">
            {this.state.loadingExperience ? (
              <Loader/>
            ):(
              <Experiences experiences={this.state.experiences}/>
            )}
            {this.state.loadingAcademic ? (
              <Loader/>
            ):(
              <Academics academics={this.state.academics}/>
            )}
            {this.state.loadingCourse ? (
              <Loader/>
            ):(
              <Courses courses={this.state.courses}/>
            )}
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Home;