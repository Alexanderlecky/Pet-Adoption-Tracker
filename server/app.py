from flask import Flask
import json, time 

app = Flask(__name__)


@app.route('/', methods=['Get'])
def home_page():
    data_set ={'Page': 'Home', 'Massage': 'Welcome to Prestige Properties'}
    json_dump = json.dumps(data_set)

    return json_dump


@app.route('/user/', methods=['Get'])
def request_page():
    user_query = str(request.args.get('user')) #  /user/?user=user


    data_set ={'Page': 'Request', 'Massage': f'Successfuly got the request for {user_query}'}
    json_dump = json.dumps(data_set)

    return json_dump


if __name__ == '__main__':
    app.run(port=0000)