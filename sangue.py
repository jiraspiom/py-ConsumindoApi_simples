import requests as req
import locale
locale.setlocale( locale.LC_ALL, 'en_us' )

def saquePorCarteira(carteira):
    r = req.get(f"https://claim.bombcrypto.io/claim-orders?&limit=1000&offset=0&walletAddress={carteira}")
    dados = r.json()
    lista = dados["data"]["items"]
   
    valor = 0

    for iten in lista:
        sacado = iten["amount_of_bcoin_claimed"]
        data = iten["claimed_at"]
        valor = valor + sacado
        print(f"{locale.currency(sacado)} - {data}" )
        print()

    print(locale.currency(valor))
    print(f"Total de saque: {len(lista)}")

if __name__ == '__main__':
    carteira = "0x9c623886151194178c76c12ff1dec669dde76445"
    saquePorCarteira(carteira)
    