import axios from "axios";

export const detect = async (req, res) => {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', 'English is hard, but detectably so');

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams,
        };
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);


    } catch (error) {
        return res.send(error);
    }
}

export const languages = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
          };
          
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);


    } catch (error) {
        return res.send(error);
    }
}

export const translate = async (req, res) => {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', 'Hello, world!');
        encodedParams.set('target', 'es');
        encodedParams.set('source', 'en');
        
        const options = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: encodedParams,
        };
        
          
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);


    } catch (error) {
        return res.send(error);
    }
}