var request = new XMLHttpRequest();
let url = "https://brasil.io/api/dataset/covid19/caso/data/";
let params = "?is_last=True&city=Manaus";
request.open('GET', url + params);


function build_html(city, confirmed, date){
    var text;
    text = "Cidade: " + String(city);
    text += '<br>'
    text += "Casos confirmados: " + String(confirmed);
    text += '<br>'
    text += "Data de atualização: " + String(date);
    return text;
}

request.onload = function(){
    if (this.status == 200){
        let data = JSON.parse(this.response);
        let city = data['results'][0]['city'];
        let confirmed = data['results'][0]['confirmed']
        let update_date = data['results'][0]['date']
        let html_text = build_html(city, confirmed, update_date)
        document.body.innerHTML = html_text;
    }
}

request.onerror = function(){

}

request.send();