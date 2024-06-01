import './Footer.scss';
import footer__logo from '../../assets/logos/plf-square-logo-footer.jpg';
import developer__logo from '../../assets/logos/mario-miralles-logo.png';
import icon__phone from '../../assets/icons/icon-phone.png';
import icon__email from '../../assets/icons/icon-email.png';
import icon__web from '../../assets/icons/icon-web.png';
import icon__github from '../../assets/icons/icon-github.png';
import icon__react from '../../assets/logos/tools/react.png';
import icon__axios from '../../assets/logos/tools/axios.png';
import icon__express from '../../assets/logos/tools/expressjs.png';
import icon__git from '../../assets/logos/tools/git.png';
import icon__github2 from '../../assets/logos/tools/github.png';
import icon__heroku from '../../assets/logos/tools/heroku.png';
import icon__mysql from '../../assets/logos/tools/mysql.png';
import icon__netlify from '../../assets/logos/tools/netlify.png';
import icon__node from '../../assets/logos/tools/nodejs.png';
import icon__nodemon from '../../assets/logos/tools/nodemon.png';
import icon__npm from '../../assets/logos/tools/npm.png';
import icon__postman from '../../assets/logos/tools/postman.svg';
import icon__sass from '../../assets/logos/tools/sass.png';
import icon__vite from '../../assets/logos/tools/vite.png';
import icon__vscode from '../../assets/logos/tools/vscode.png';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <article className="footer__wrapper">
                    <img src={footer__logo} className="footer__logo" alt="pacific legal foundation logo" />
                    <div className='footer__buttons'>
                        <a className="footer__button" href="https://pacificlegal.org/donate/" target="_blank">Donate</a>
                        <a className="footer__button footer__button--contact" href='https://pacificlegal.org/contact/' target='_blank'>Contact</a>
                    </div>
                </article>
                <div className='footer__container--right'>
                    <div className='footer__container--right-top'>
                        <article className='footer__developer'>
                            <img className='footer__developer-logo' src={developer__logo} alt='mario miralles, full-stack software developer' />
                            <section className='footer__developer-info'>
                                <div className='footer__developer-info-wrapper'>
                                    <img className='footer__developer-info-icon' src={icon__phone} alt='phone' />
                                    <a className='footer__developer-info-text' href='tel:+17863337300'>+1 786 333-7300</a>
                                </div>
                            </section>
                            <section className='footer__developer-info'>
                                <div className='footer__developer-info-wrapper'>
                                    <img className='footer__developer-info-icon' src={icon__email} alt='email' />
                                    <a className='footer__developer-info-text' href='mailto:miralles.mario@gmail.com'>miralles.mario@gmail.com</a>
                                </div>
                            </section>
                            <section className='footer__developer-info'>
                                <div className='footer__developer-info-wrapper'>
                                    <img className='footer__developer-info-icon' src={icon__web} alt='linkedin' />
                                    <a className='footer__developer-info-text' href='https://linkedin.com/in/mariofmiralles' target='_blank'>https://linkedin.com/in/mariofmiralles</a>
                                </div>
                            </section>
                            <section className='footer__developer-info'>
                                <div className='footer__developer-info-wrapper'>
                                    <img className='footer__developer-info-icon' src={icon__github} alt='github' />
                                    <a className='footer__developer-info-text' href='https://github.com/MarioMiralles' target='_blank'>https://github.com/MarioMiralles</a>
                                </div>
                            </section>
                        </article>
                        <article className='footer__tools'>
                            <h4 className='footer__tools-header'>Tech Stack Used</h4>
                            <section className='footer__tools-icons'>
                                <img className='footer__tools-icon' src={icon__axios} alt='axios' />
                                <img className='footer__tools-icon' src={icon__express} alt='express' />
                                <img className='footer__tools-icon' src={icon__git} alt='git' />
                                <img className='footer__tools-icon' src={icon__github2} alt='github' />
                                <img className='footer__tools-icon' src={icon__heroku} alt='heroku' />
                                <img className='footer__tools-icon' src={icon__mysql} alt='mysql' />
                                <img className='footer__tools-icon' src={icon__netlify} alt='netlify' />
                                <img className='footer__tools-icon' src={icon__node} alt='node' />
                                <img className='footer__tools-icon' src={icon__nodemon} alt='nodemon' />
                                <img className='footer__tools-icon' src={icon__npm} alt='npm' />
                                <img className='footer__tools-icon' src={icon__postman} alt='postman' />
                                <img className='footer__tools-icon' src={icon__react} alt='react' />
                                <img className='footer__tools-icon' src={icon__sass} alt='sass' />
                                <img className='footer__tools-icon' src={icon__vite} alt='vite' />
                                <img className='footer__tools-icon' src={icon__vscode} alt='vscode' />
                            </section>
                        </article>
                    </div>
                    <article className='footer__tools--desktop'>
                        <h4 className='footer__tools-header'>Tech Stack Used</h4>
                        <section className='footer__tools-icons'>
                            <img className='footer__tools-icon' src={icon__axios} alt='axios' />
                            <img className='footer__tools-icon' src={icon__express} alt='express' />
                            <img className='footer__tools-icon' src={icon__git} alt='git' />
                            <img className='footer__tools-icon' src={icon__github2} alt='github' />
                            <img className='footer__tools-icon' src={icon__heroku} alt='heroku' />
                            <img className='footer__tools-icon' src={icon__mysql} alt='mysql' />
                            <img className='footer__tools-icon' src={icon__netlify} alt='netlify' />
                            <img className='footer__tools-icon' src={icon__node} alt='node' />
                            <img className='footer__tools-icon' src={icon__nodemon} alt='nodemon' />
                            <img className='footer__tools-icon' src={icon__npm} alt='npm' />
                            <img className='footer__tools-icon' src={icon__postman} alt='postman' />
                            <img className='footer__tools-icon' src={icon__react} alt='react' />
                            <img className='footer__tools-icon' src={icon__sass} alt='sass' />
                            <img className='footer__tools-icon' src={icon__vite} alt='vite' />
                            <img className='footer__tools-icon' src={icon__vscode} alt='vscode' />
                        </section>
                    </article>
                    <article className="footer__attribution">
                        <h4 className='footer__attribution-header'>Attribution</h4>
                        <a className='footer__attribution-text' href='https://xaviercromartie.blogspot.com/2009/12/libertarian-ranking-of-united-states.html' target='_blank'>A Libertarian Ranking of the United States Presidents by Xavier Cromartie</a>
                    </article>
                </div>
            </div>
            <p className='footer__attribution-disclaimer'>Data provided is subjective for education and demo purposes only.</p>
        </footer>
    )
}

export default Footer