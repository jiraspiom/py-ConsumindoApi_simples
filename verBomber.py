import requests as req

url = "https://api.nucito.com/v1/GetHeros"

payload = {'address': '0x9C4d27c7c5796B8e64D626c6015463CfE4568dBF'}

r = req.post(url, json=payload)
dados = r.json()

print(len(dados["heros"]))