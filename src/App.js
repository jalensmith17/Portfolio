import styles from './App.module.scss'
import NavBar from './components/NavBar/NavBar'

export default function App(){
    
    return(
        <>
			<NavBar />
            <div className={styles.banner}>
                <h1>Jalen's Portfolio</h1>
              <img src='https://i.imgur.com/5WXigZL.jpg'/>
            </div>
        </>
    )
}