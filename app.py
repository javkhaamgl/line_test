from flask import Flask, request, render_template, make_response
from flask_bootstrap import Bootstrap
import os
import uuid
import base64
from PIL import Image
import warnings
warnings.simplefilter('error', Image.DecompressionBombWarning)

app = Flask(__name__, static_folder='static', template_folder='template')
bootstrap = Bootstrap(app)
@app.route('/')
def do_get():
    return render_template('index.html')

@app.route('/RRnet')
def RRnet():
    return render_template('/RRnet/index.html')  

@app.route('/RRnet/agree')
def RRnet_agree():
    return render_template('/RRnet/agree.html') 

@app.route('/RRnet/faq')
def RRnet_faq():
    return render_template('/RRnet/faq.html') 

@app.route('/RRnet/legalmatters')
def RRnet_legalmatters():
    return render_template('/RRnet/legalmatters.html')

@app.route('/RRnet/privacy')
def RRnet_privacy():
    return render_template('/RRnet/privacy.html')   

@app.route('/RRnet/accessibility')
def RRnet_accessibility():
    return render_template('/RRnet/accessibility.html')

@app.route('/tabireg')
def tabireg():
    return render_template('/tabireg/index.html')

@app.route('/tabireg/registration')
def registration():
    return render_template('/tabireg/registration.html')   

@app.route('/tabireg/agree')
def agree():
    return render_template('/tabireg/agree.html')       

@app.route('/tabireg/login')
def login():
    return render_template('/tabireg/login.html')   

@app.route('/tabireg/simple/register')
def register():
    return render_template('/tabireg/simple/register.html')      

@app.route('/tabireg/simple/auth')
def auth():
    return render_template('/tabireg/simple/auth.html')      

@app.route('/tabireg/simple/delete')
def delete():
    return render_template('/tabireg/simple/delete.html')   

@app.route('/tabireg/mail')
def mail():
    return render_template('/tabireg/mail.html')   
   
@app.route('/tabireg/user/password/reset')
def reset():
    return render_template('/tabireg/user/password/reset.html')  

@app.route('/tabireg/faq')
def faq():
    return render_template('/tabireg/faq.html')       
   
if __name__ == '__main__':
    app.debug = True
    app.run()