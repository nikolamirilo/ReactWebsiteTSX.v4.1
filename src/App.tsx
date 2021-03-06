import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Test from './pages/Test'

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 800))
      setLoading((loading) => !loading)
    }
    loadData()
  }, [])
  if (loading) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: '#ffe107',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loader
          type="TailSpin"
          color="#ffe107"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/test" component={Test} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default App
