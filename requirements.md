# RNF:

-> backend (app/api) rodando postgres, node e redis em containers separados
-> frontend (app/web) rodando node e nginx em containers separados 

-> comunicação entre front e back end feita com aquela lib de typescript que não lembro o node_modules

# BDD specs:

## Narrativa 1
```
	Como um admin do sistema
Quero que o sistema me mostre os menus que apenas Admin tem acesso
```

## Cenário
```
	Dado que um admin esteja logado
Quando acessar o menu, deve mostrar um menu com as opções:
	- Histórico de pedidos
	- Cadastros
		- Cadastrar categorias
		- Cadastrar produtos
		- Cadastrar adicionais (por produto)
		- Reorganizar menu (ordem das categorias na tela)

```

## Narrativa 2
```
	Como um cliente online
Deve mostrar o menu principal com o cardápio
```

## Cenário 2
```
	Dado que um cliente esteja logado
Quando acessar o sistema, deve ver uma tela podendo
	- Fazer login
	- Ver o cardápio
```

## Cenário 2.1
```
	Dado que o cliente decide fazer login
Deve receber as opções de fazer login com e-mail ou google
E retornar para a tela de cardápio
```

## Cenário 2.2
```
	Dado que o cliente decide ver o cardápio
Deve mostrar a tela normal do cardápio mas sem a opção de fazer compra
```

## Cenário 3
```
	Dado que o cliente esteja logado
	E na tela de cardápio
Deve ter a opção de adicionar os itens ao carrinho, e poder finalizar o pedido
E o menu lateral deve mostrar as opções de
	- Histórico de Pedidos
	- Dados do usuário
	- Logout
```

## Cenário 3.1
```
	Dado que o cliente não esteja logado
	E na tela de cardápio
Deve ter a opção de adicionar os itens ao carrinho, salvando no cache 
	mas antes de poder finalizar o pedido, deve fazer login
E o menu lateral deve mostrar as opções de 
	- Fazer login
```
	usuario:
		- tela de menu com as categorias e os produtos
		- clicar no produto abre um modal com os adicionais do produto
		- botão adicionar ao carrinho -> leva de volta ao menu
	
	- login com email
	- tela de previsão de entrega
endpoints:
 - / -> ver o cardápio ou fazer login
	- ver o cardápio seria ver o menu principal sem poder comprar mas podendo adicionar ao carrinho
 - /home -> menu principal com menu lateral (botão hamburger se a tela for pequena)
	- se estiver logado, o menu lateral mostra lista de pedidos e detalhes da conta
	- se não, mostra opção de fazer login



	
