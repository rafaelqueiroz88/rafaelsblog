import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Profile/profile.css'

const profile_pic = {
    height: '250px',
    width: '95%',
}

const custom_text = {
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

const custom_bg = {
    backgroundColor: 'rgb(0, 60, 255)'
}

const Profile = () => {

    return(
        <Container fluid style={custom_text}>
            <Row>
                <Col sm={3} className="bg-info">
                    <Row className="pt-2 pb-3">
                        <Col>
                            <h2>Rafael Queiroz de Castro</h2>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col className="text-center">
                            <img src="/me.jpg" alt="Rafael Queiroz de Castro" style={profile_pic} />
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col className="text-center">
                            <h4>Contato</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pl-5">
                            <p>
                                <i className="fab fa-google"></i> rafael.qdc88@gmail.com <br />
                                <i className="fab fa-whatsapp"></i> (11) 94033-1062 <br />
                                <a target="blank" href="https://github.com/rafaelqueiroz88" className="link-dark">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a> <br />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <h4>Mais Informações</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center pt-2 pb-2">
                            <a target="blank" href="https://github.com/rafaelqueiroz88" className="link-dark">
                                <i className="fab fa-github"></i> Github
                            </a>
                            {` `}
                            <a target="blank" href="https://heroku.app" className="link-dark">
                                <i className="fas fa-book-reader"></i> Meu Blog Pessoal
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>São Paulo - SP</li>
                                <li>Rua Alto das Garças, Cidade Patriarca</li>
                                <li>Casado, papai de 4 Gatos <i className="fas fa-cat"></i></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm={9} className="pt-2 pb-3 pl-5">
                    <Row>
                        <Col className="text-center">
                            <h2>Desenvolvedor Ruby on Rails</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr style={custom_bg} />
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col>
                            <h4>Perfil Pessoal</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Resumo</h4>
                            <p className="pl-3">
                                Desenvolvedor Full Stack com habilidades em Ruby on Rails
                                e React, além de algumas outras tecnologias. <br />
                                Experiência prática como analista de suporte, 
                                manutenção e configuração. <br />
                                Vivência em Marketing Digital, e automação de processos de Marketing. <br />
                                Comunicativo, proativo, disposto a aprender e pronto
                                para novos desafios. <br />
                                <strong>Cada dia mais preparado</strong>.
                            </p>
                        </Col>
                        <Col>
                            <h4>Competências</h4>
                            <Row>
                                <Col>
                                    <ul>
                                        <li>
                                            Ruby & Ruby on Rails
                                        </li>
                                        <li>
                                            React & Redux
                                        </li>
                                        <li>
                                            Docker
                                        </li>
                                        <li>
                                            AWS
                                        </li>
                                        <li>
                                            Inglês Intermediário
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>
                                            Sidekiq
                                        </li>
                                        <li>
                                            Sidekiq-Cron
                                        </li>
                                        <li>
                                            RSpec
                                        </li>
                                        <li>
                                            Heroku
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="pt-2 pb-3">
                        <Col>
                            <h4>Experiência</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Micropower Informática. Tarefas mais comuns: Manutenção, montagem 
                                    e desmontagem de micro computadores. A rotina envolvia manutenção, 
                                    suporte técnico e também algumas tarefas de configuração divididas 
                                    entre software, hardware e rede. 
                                    A loja atuava como assistência autorizada em mais de 30 marcas
                                    o que tornava importante manter e atualizar e compartilhar
                                    documentações com os respectivos representantes. <br />
                                    Março/2012 à Novembro/2012
                                </li>
                                <li>
                                    Equipe Informática. Tarefas mais comuns: Manutenção de micro 
                                    computadores e alguns outros eletrônicos. A rotina envolvia
                                    manutenção e suporte técnico para os clientes. <br />
                                    Consultoria tecnológica para as empresas locais. <br />
                                    Obs. Com tres meses, assumi a liderança da equipe de manutenção. 
                                    Após essa mudança, passei a ter algumas tarefas
                                    extras como gerenciar, revisar e controlar o laboratório. <br />
                                    Novembro/2012 à Setembro/2013
                                </li>
                                <li>
                                    Powertic. Desenvolvedor Junior. Tarefas mais comuns: 
                                    Desenvolvimento de <em>Plugins</em>
                                    que eram disponibilizados aos clientes que utilizavam WordPress,
                                    desenvolvimento de <em>features</em> para uso interno (normalmente
                                    desenvolvidas com Ruby On Rails), documentação das <em>features</em> e 
                                    <em>plugins</em> desenvolvidos. <br />
                                    Suporte aos clientes no desenvolvimento de campanhas e automação
                                    Marketing. Prestava também assistência durante o treinamento 
                                    prestado para alguns clientes. <br />
                                    O desenvolvimento e suporte prestado ao Wordpress ocupavam a maior
                                    parte das tarefas, porém foi aqui o meu primeiro contato com
                                    a linguagem Ruby. <br />
                                    Fevereiro/2015 à Julho/2015
                                </li>
                                <li>
                                    Criação Sete. Desenvolvedor Junior. Tarefas mais comuns: 
                                    Desenvolvimento de <em>features</em> para os clientes da agência. <br />
                                    Entre as tarefas desempenhadas, a maior parte do esforço era em 
                                    documentar e reestruturar os sites mais antigos desenvolvidos para 
                                    os clientes, além de correção de <em>bugs</em>, e confecção de relatórios.
                                    <br />
                                    Agosto/2015 à Agosto/2018
                                </li>
                                <li>
                                    Hfocus. Desenvolvedor <em>Full Stack</em> Pleno. Tarefas mais comuns:
                                    Desenvolvimento de <em>features</em> disponibilizadas no serviço,
                                    confecção de relatórios, correção de <em>bugs</em>, documentação e
                                    engenharia de <em>software</em>. <br />
                                    Participação no desenvolvimento de um novo produto atuando como 
                                    desenvolvedor, analista de negócios com participação ativa na adaptação
                                    das regras de negócio e lógicas atuais e analista de qualidade. <br />
                                    Agosto/2018. Profissão Atual
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Formação</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    CTMA: Análise e Desenvolvimento de Sistemas (curso técnico)
                                </li>
                                <li>
                                    Centro Paula Souza - Fatec: Graduação em Gestão da Tecnologia da Informação
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile