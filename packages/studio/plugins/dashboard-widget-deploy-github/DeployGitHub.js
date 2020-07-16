import React, {useState, useEffect, useRef} from 'react'
import fetch from 'node-fetch'
import styles from './DeployGitHub.css'
function useInterval (callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
const DeployGitHub = () => {
  const [deployingStudio, setDeployingStudio] = useState(false)
  const [deployingWeb, setDeployingWeb] = useState(false)
  const [disableStudio, setDisableStudio] = useState(false)
  const [disableWeb, setDisableWeb] = useState(false)
  const deployStudio = () => {
    setDeployingStudio(true)
    setDisableStudio(true)
    fetch(
      'https://c2je1jc4ub.execute-api.eu-central-1.amazonaws.com/beta/stackbot/add-webhook/76b1014c-8df6-4b66-8659-1b6dec161fe8/drishi1990/leaf-node-123',
      {
        method: 'POST',
        body: JSON.stringify({event_type: 'studio-build-deploy'}),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then(res => res.json())
      .then(() => {
        setTimeout(() => setDeployingStudio(false), 180000)
        setTimeout(() => setDisableStudio(false), 180000)
      })
  }
  const deployWeb = () => {
    setDeployingWeb(true)
    setDisableWeb(true)
    fetch(
      'https://c2je1jc4ub.execute-api.eu-central-1.amazonaws.com/beta/stackbot/add-webhook/76b1014c-8df6-4b66-8659-1b6dec161fe8/drishi1990/leaf-node-123',
      {
        method: 'POST',
        body: JSON.stringify({event_type: 'web-build-deploy'}),
        headers: {'Content-Type': 'application/json'}
      }
    )
      .then(res => res.json())
      .then(() => {
        setTimeout(() => setDeployingWeb(false), 180000)     
        setTimeout(() => setDisableWeb(false), 180000)
      })
  }
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Build & Deploy</h2>
        </header>
        <p>
          NOTE: Because these sites are static builds, they need to be re-deployed to see the
          changes when documents are published.
        </p>
        <hr />
        <ul className={styles.mid_container}>
          <li className={styles.list}>
            <figure>
              <img src="../../static/badge-studio.svg" />
              <figcaption>
                <a href="https://github.com/drishi1990/leaf-node-123/actions?query=workflow%3A%22Studio+%7C+Build+and+Deploy%22" target="_blank">
                  View Studio Deployment
                </a>
              </figcaption>
            </figure>
            <button
              className={styles.button}
              type="button"
              disabled={disableStudio}
              onClick={deployStudio}
            >
              {deployingStudio ? 'Deploying...' : 'Deploy'}
            </button>
          </li>

          <li className={styles.list}>
            <figure>
              <img src="../../static/badge.svg" />
              <figcaption>
                <a href="https://github.com/leaf-node-123/actions" target="_blank">View Web Deployment</a>
              </figcaption>
            </figure>
            <div>
              <button
                className={styles.button}
                type="button"
                onClick={deployWeb}
                disabled={disableWeb}
              >
                {deployingWeb ? 'Deploying...' : 'Deploy'}
              </button>
            </div>
          </li>
        </ul>
        <div className={styles.link}>
          <a href="https://www.netlify.com/" target="_blank">
            Manage Sites at Netlify
          </a>
        </div>
      </div>
    </>
  )
}
export default DeployGitHub