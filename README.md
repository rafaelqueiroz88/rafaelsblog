<!-- TODO: Finish this readme before push to github -->
<!-- Project Shields -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<p align="center">
    <a href="https://github.com/rafaelqueiroz88/https://github.com/rafaelqueiroz88/rafaelsblog">
        <img src="me.jpg" alt="Logo" width="160" height="160">
    </a>
</p>

<br />

# {R}afael on {R}ails

O que há de conteúdo por aqui?

<p align="center">
    Gostei! Como colaborar sem ter nenhuma experiência em desenvolvimento de <strong>software?</strong> <br />
    <a href="https://github.com/rafaelqueiroz88/rafaelsblog">
        <strong>Explorar »</strong>
    </a>
</p>

<ul>
    <li>
        <a href="https://rafaelonrails.herokuapp.com/">
            Quero ver estas linhas de código em ação
        </a>    
    </li>
    <li>
        <a href="https://github.com/rafaelqueiroz88/rafaelsblog/issues">
            Vish...Achei uma falha...Reportar Bug
        </a>
    </li>
    <li>
        <a href="https://github.com/rafaelqueiroz88/rafaelsblog/issues">
            Tenho uma ideia...anota aí!
        </a>    
    </li>
</ul>    

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#acerca-do-projeto">Acerca do projeto</a>
      <ul>
        <li><a href="#built-with">Tecnologias adotadas no desenvolvimento</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Primeiros passos</a>
      <ul>
        <li><a href="#prerequisites">Requisitos</a></li>
        <li><a href="#installation">Instação</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Progresso</a></li>
    <li><a href="#contributing">Contribuição</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#ready">Tudo Pronto</a></li>
    <li><a href="#contact">Contato</a></li>
  </ol>
</details>

<a id="acerca-do-projeto" ></a>

## Acerca do Projeto

Este projeto é apenas um laboratório para testes de novas tecnologias, bibliotecas, técnicas de desenvolvimento *web*, *features* entre outros. As informações aqui presente podem ser discutidas com intúito de melhorar ainda mais a riqueza de conteúdo presente neste <strong>Blog</strong>.

<a href="#built-with" id="built-with" ></a>

## Tecnologias adotadas no desenvolvimento

Encontre nessa sessão todas as tecnologias que foram adotadas no desenvolvimento desta aplicação seguidas de suas respectivas fontes:

* [Ruby](https://rubyonrails.org/)
* [Ruby on Rails](https://www.ruby-lang.org/pt/)
* [React](https://pt-br.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Rspec](https://rspec.info/)
* [Sidekiq](https://sidekiq.org/)
* [Sidekiq-Cron](https://github.com/ondrejbartas/sidekiq-cron)
* [Redis](https://redis.io/)
* [Docker](https://www.docker.com/)
* [Postgresql](https://www.postgresql.org/)
* [Heroku](https://www.heroku.com/about)
* [AWS](https://aws.amazon.com/pt/free/?s_kwcid=AL!4422!3!561843094953!p!!g!!console%20aws&trk=c623d581-46f6-43a2-b227-cabbee9cd673&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|AWS|Core|BR|PT|Text&ef_id=Cj0KCQiAkZKNBhDiARIsAPsk0Wj3LlVpV-8yrCBrAy2OnOv4a26uGmmAsq2q32iE2l62MiYQVf9wfHQaAm05EALw_wcB:G:s&s_kwcid=AL!4422!3!561843094953!p!!g!!console%20aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)

<a href="#getting-started" id="getting-started"></a>

## Primeiros passos

Para seguir com a instalação e inicialização da aplicação, será necessário fazer o *download* diretamente do Github ou o clone da aplicação. Além disso, é recomendado <strong>fortemente</strong> a leitura de toda a documentação antes de iniciar qualquer um dos passos listados a seguir.

<br />

Caso a opção escolhida seja o clone, execute o seguinte comando em seu terminal favorito:


```
git clone https://github.com/rafaelqueiroz88/rafaelsblog
```

Acesse o diretório da aplicação e então faça a instalação das bibliotecas necessárias

<br />

Dependencias do FrontEnd
```
yarn install
```
<br />

Dependencias do BackEnd
```
bundle install
```

<br />

<a href="#prerequisites" id="prerequisites"></a>

## Requisitos
Antes de iniciar a aplicação, será necessário verificar se todas as dependencias estão disponíveis na máquina
* Postgresql (instalado, porém desativado caso queira usar o Docker)
* Ruby 3.0.2 (ou superior)
* Rails 6 (ou superior)
* Docker (opcional)

O uso do Docker não é obrigatório, porém é recomendado. Entretanto, caso não queira utilizar a ferramenta, ignore o próximo passo e vá direto para a sessão de uso da aplicação com o Puma.

<br />

### Utilizando o Docker (recomendado)

Para levantar a aplicação utilizando o Docker, apenas será necessário executar o montar e levantar a aplicação.
Os comandos são:

```
docker-compose build
docker-compose up
```

>Se necessário, pressione ctrl+c para parar a aplicação

<br />

### Utilizando o puma

Para inicializar a aplicação diretamente em seu console com o servidor local, será necessário fazer algumas alterações:

* Atualizar o arquivo config/database.yml
* Inicializar o banco de dados do Postgresql
* Inicializar o Redis
* Configurar e inicializar o Sidekiq

<br />

### Configuração do Shrine

O Shrine já estará preparado para armazenar imagens em ambiente local.
Para os usuários do __Docker__ ou do __Heroku__ (que utilizam algo parecido com Docker em sua estrutura) será necessário fazer o *Upload* das imagens em algum serviço de *Bucket* como por exemplo a *S3* da *AWS*, pois a cada vez que o *container* for desligado todos os arquivos serão perdidos, e com isso as imagens serão perdidas no processo. Para evitar que isso ocorra basta configurar o arquivo __db/seeds.rb__ com as credenciais da *AWS/S#* ou talvez utilizar __Inflection__.

<br />

Após introduzir as configurações no arquivo __seeds.rb__, execute o seguinte comando:

```
rake db:seed
```
>Obs. O comando *seed* não possui um *output*. Se nada aparecer após a execução do comando quer dizer que a execução foi um sucesso! Caso queira uma amostra visual do sucesso desta operação, utilize o console do __Rails__

<br />

Feito isso, será necessário reiniciar o servidor, pois a alteração se reflete no  *initializer* do __Shrine__.
Com esta alteração, o __Shrine__ automaticamente deverá estar preparado para executar os *uploads* em qualquer plataforma (local ou nuvem).

>Obs. Não será necessário aplicar esta configuração caso não estiver utilizando o Docker, porém considere aplicar essa configuração caso o projeto entrar em ambiente de produção por questão de boas práticas.

<br />

<a href="#roadmap" id="roadmap"></a>

## Progresso

Veja [open issues](https://github.com/rafaelqueiroz88/rafaelsblog/issues) para ver a lista de features sugeridas. Ou acompanhe as *Branchs* do projeto.

<a href="#contributing" id="contributing"></a>

## Contribuições

Contribuições fazem com que nossas aplicações sejam sempre melhores. Neste caso não é diferente. Caso queira compartilhar seu conhecimento basta seguir os passos. **Sua ajuda será muito apreciada!**

1. Crie um Fork do projeto
2. Crie a sua própria branch (`git checkout -b feature/AmazingFeature`)
3. Escreva uma commit de suas alterações (`git commit -m 'Add new feature'`)
4. Envie as atualizações para a Branch (`git push origin feature/AmazingFeature`)
5. Abra uma Pull Request para enviar suas sugestões de alteração

<a href="#license" id="license"></a>

## Licença

Distribuído sobre a licença GNU License. Veja mais em nossa base de conhecimentos.

<a href="#ready" id="ready"></a>

## Tudo pronto

Após a realização do passo-a-passo a aplicação estará disponível para acesso.
Abra o seu navegador favorito e acesse:

```
localhost:3000/
```

<a href="#contact" id="contact"></a>

## Contato

### Rafael Queiroz

* [@facebook](https://www.facebook.com/rafael.queiroz.castro/)
[@linkedin](https://www.linkedin.com/in/rafael-queiroz-0074a4139/)
* rafael.qdc88@gmail.com
* Projeto: [Rafael on Rails](https://github.com/rafaelqueiroz88/rafaelsblog)

<br />

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[contributors-shield]: https://img.shields.io/github/contributors/rafaelqueiroz88/rafaelsblog.svg?style=for-the-badge
[contributors-url]: https://github.com/rafaelqueiroz88/rafaelsblog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rafaelqueiroz88/rafaelsblog?style=for-the-badge
[forks-url]: https://github.com/rafaelqueiroz88/rafaelsblog/network/members
[stars-shield]: https://img.shields.io/github/stars/rafaelqueiroz88/rafaelsblog?style=for-the-badge
[stars-url]: https://github.com/rafaelqueiroz88/rafaelsblog/stargazers
[issues-shield]: https://img.shields.io/github/issues/rafaelqueiroz88/rafaelsblog.svg?style=for-the-badge
[issues-url]: https://github.com/rafaelqueiroz88/rafaelsblog/issues
[license-shield]: https://img.shields.io/github/license/rafaelqueiroz88/rafaelsblog.svg?style=for-the-badge
[license-url]: https://github.com/rafaelqueiroz88/rafaelsblog/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rafael-queiroz-0074a4139/