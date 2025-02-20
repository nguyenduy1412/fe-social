
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import News from '../components/News'
import MyContact from '../components/MyContact'

export default function Home() {
  return (
    <>
      <Header  />
        <main className="main-content sidebar-content">
        <div className="container-fluid">
            <div className="row justify-content-between">
              <MyProfile hide={false} index={1} /> 
              <News/>
              <MyContact/>
            </div>  
        </div>
        </main>
    </>
  )
}
