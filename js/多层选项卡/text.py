import requests

data_list = [ 's1', 's2','s3','s4','s5' ]


for data in data_list:

    url = 'https://xxiaob.github.io/js-demo/07-DOM&CSS%E4%BD%9C%E4%B8%9A/img2/{}.jpg'.format(data)

    print(url)
    response = requests.get(url).content

    with open('img/{}.jpg'.format(data) ,'wb') as f:
        f.write(response)

