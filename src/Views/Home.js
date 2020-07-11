import React from 'react';

import MyProfile from '../Components/MyProfile'
import Experiences from "../Components/Experiences";
import Loader from "../Components/Loader";
import Academics from "../Components/Academics";
import Courses from "../Components/Courses";
import UniversityExperiences from "../Components/UniversityExperiences";

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
  },
  {
    kind: 'Curso',
    title: 'Curso Oracle',
    place: 'UTO – FNI',
    date: 'Oruro, 17 de Octubre de 2016 a 24 de Octubre de 2016'
  },
  {
    kind: 'Curso',
    title: 'Campamento internacional de Programación. (Cursos y Competencias)',
    place: 'UTO – FNI',
    date: 'Oruro, 12 de Septiembre de 2016 a 21 de Septiembre de 2016'
  },
  {
    kind: 'Taller',
    title: 'Aprobado en el curso de Desarrollo de Aplicaciones y Generación de Reportes con C#.Net SQL Server 2008 R2 y ReportViewer',
    place: 'UTO – FNI',
    date: 'Oruro, 28 de Septiembre de 2015 al 16 de Octubre de 2015'
  },
  {
    kind: 'Taller',
    title: 'Introducción al Diseño Web',
    place: 'UTO – FNI',
    date: 'Oruro, 14 – 25 de Septiembre de 2015'
  },
  {
    kind: 'Taller',
    title: 'Administración de Base de Datos con SQL Server y MySQL',
    place: 'UTO – FNI',
    date: 'Oruro, 24 de Agosto de 2015 a 4 de Septiembre de 2015'
  },
  {
    kind: 'Taller',
    title: 'Campamento de Programación de Sistemas e Informática',
    place: 'UTO – FNI',
    date: 'Oruro, 24 – 29 de Agosto de 2015'
  },
  {
    kind: 'Seminario',
    title: 'Jornadas Académicas',
    place: 'UTO – FNI',
    date: 'Oruro, 16 – 17 de Junio de 2015',
  },
  {
    kind: 'Seminario',
    title: '3er Congreso Nacional de Ingeniería Informática, Sistemas y Telecomunicaciones',
    place: 'SIB – LA PAZ',
    date: 'La Paz, 30 – 31 de Mayo de 2015',
  },
  {
    kind: 'Taller',
    title: 'Arduino',
    place: 'UTO – FNI',
    date: 'Oruro, 15 – 26 de Mayo de 2015',
  }
]

const universityExperiences = [
  {
    experience: 'Auxiliar de Catedra - Simulación de Sistemas',
    place: 'UTO - FNI.',
    date: '01 de enero de 2019 - 30 de Junio de 2019'
  },
  {
    experience: 'Auxiliar de Catedra - Simulación de Sistemas',
    place: 'UTO - FNI.',
    date: '01 de julio de 2018 - 31 de diciembre de 2018'
  },
  {
    experience: 'Auxiliar de Catedra - Bases de Datos I',
    place: 'UTO - FNI.',
    date: '01 de enero de 2018 - 30 de junio de 2018'
  },
  {
    experience: 'Auxiliar de Catedra - Bases de Datos I',
    place: 'UTO - FNI.',
    date: '01 de julio de 2017 - 31 de diciembre de 2017'
  },
  {
    experience: 'Auxiliar de Catedra - Bases de Datos II',
    place: 'UTO - FNI.',
    date: '01 de enero de 2016 - 30 de Junio de 2016'
  },
  {
    experience: 'Representación a la facultad de Ingeniería Sistemas (UTO) en la competencia clasificatoria latinoamericana organizado por ACM ICPC.',
    place: 'Potosí, UNIVERSIDAD AUTÓNOMA TOMAS FRÍAS.',
    date: '10 – 11 de Noviembre de 2018.'
  },
  {
    experience: 'Lugar obtenido  en el podio y clasificación a la competencia latinoamericana como representante de la facultad de Ingeniería de Sistemas (UTO), organizado por la ACM ICPC.',
    place: 'Oruro, INTJEM.',
    date: '1 de Septiembre de 2018.'
  },
  {
    experience: 'Reconocimiento Primer Lugar en concurso de Programación organizado por la Carrera de Sistemas e Informática.',
    place: 'Oruro, UTO – FNI.',
    date: '16 de Junio de 2018.'
  },
  {
    experience: 'Representación a la facultad de Ingeniería Informática (UTO) en la competencia clasificatoria latinoamericana organizado por la ACM ICPC.',
    place: 'Sucre, Universidad Mayor, Real y Pontificia de San Francisco Xavier.',
    date: '10 – 11 de Noviembre de 2017.'
  },
  {
    experience: 'Aplicador, Control y Responsable de Aula para la 6ta Olimpiada Científica Plurinacional Boliviana.',
    place: 'Oruro',
    date: '29 de Julio de 2016'
  },
  {
    experience: 'Reconocimiento Primer Lugar en concurso de Programación organizado por la Carrera de Sistemas e Informática.',
    place: 'Oruro, UTO – FNI',
    date: '16 de Junio de 2016'
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
    universityExperiences: '',
    loadingUniversityExperience: true,
    errorUniversityExperience: null
  }

  componentDidMount(){
    this.experienceIndex()
    this.academicIndex()
    this.courseIndex()
    this.universityExperiences()
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

  universityExperiences = async () => {
    this.setState({
      loadingUniversityExperience: true,
      errorUniversityExperience: null
    })
    try {
      this.setState({
        loadingUniversityExperience: false,
        universityExperiences: universityExperiences
      })
    } catch (error) {
      this.setState({
        loadingUniversityExperience: false,
        errorUniversityExperience: error
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
            <div className="accordion" id="accordionExample">
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
              {this.state.loadingUniversityExperience ? (
                <Loader/>
              ):(
                <UniversityExperiences universityExperiences={this.state.universityExperiences}/>
              )}
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Home;