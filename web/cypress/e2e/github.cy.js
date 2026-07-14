describe('Gerenciamento de Perfis do Github', ()=> {

    beforeEach(()=> {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve poder cadastrar um novo perfil do github', ()=> {
        
        cy.get('#name').type('Jéssica Lima')
        cy.get('#username').type('jessicalimma')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Jéssica Lima')
        cy.get('#username').type('jessl')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr','jessicalimma')
            .should('be.visible')
            .as('trprofile')

        cy.get('@trprofile')
            cy.contains('td','Jéssica Lima')
            .should('be.visible')

        cy.get('@trprofile')
            cy.contains('td','QA')
            .should('be.visible')
                
    }) 


    it('Deve poder remover um perfil do github', ()=> {

        const profile = {
            name: 'Jéssica Lima',
            username: 'jessma',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')

    })


    it('Deve validar o link do github', ()=> {

        const profile = {
            name: 'Jéssica Lima',
            username: 'jessicalimma',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')
    })

})


// . [] (()=> {}) ('', ()=> {}) "" ('','') ('') ()