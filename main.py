import requests as req

def buscarDados(moeda, pais):
    request = req.get(f'https://api.coingecko.com/api/v3/simple/price?ids={moeda}&vs_currencies={pais}')
    dados = request.json()
    print(dados["bomber-coin"][f"{pais}"])

if __name__ == '__main__':
    buscarDados('bomber-coin', 'brl')
    buscarDados('bomber-coin', 'usd')
