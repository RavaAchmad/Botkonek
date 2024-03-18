const axios = require('axios');
const fetch = require('node-fetch');
const handler = async (m, { text, conn, command }) => {
    const teks = text && m.quoted ? (m.quoted.text ? text + '\n\n' + m.quoted.text : text) : text ? text : (m.quoted ? (m.quoted.text ? m.quoted.text : false) : false);
	if (!teks) throw 'Mangsut?';
    m.reply('_M E N G E T I K_')
    let varian;
    
    if (command === 'bingc') {
        varian = 'Creative';
    } else if (command === 'bing') {
        varian = 'Balanced';
    } else if (command === 'bingp') {
        varian = 'Precise';
    }
    try {
        const result = await fetchData(teks, varian);
        m.reply(result.adaptiveResponse.text);
        if (result.generatedImage && result.generatedImage.data && result.generatedImage.data.length > 0) {
    for (let imageUrl of result.generatedImage.data) {
        await conn.sendFile(m.chat, imageUrl, '', '', m);
    }
} else if (result.generatedImage) {
    m.reply(result.generatedImage.message);
} else {
    m.reply('No generated image data available.');
}
    } catch (error) {
        conn.reply('120363061326932995@g.us', `HMM? \n\n${error.stack}`, m)
        m.reply('Oops, something went wrong!');
        //throw error
    };
};

handler.help = ['bingc / bing / bingp'];
handler.tags = ['ai'];
handler.command = /^(bingc|bing|bingp)$/i;
//handler.exp = Math.floor(Math.random() * 200) + 1;

module.exports = handler;


async function fetchData(teks, varian) {
  try {
    const server = await axios.post(`https://skizo.tech/api/bing-chat?apikey=ravaja`, {
      text: teks,
      cookie: 'Imported_MUID=30BF235628746A39086230E629D76B1D; MUID=32447BE6660E64780B09685A675865AC; MUIDB=32447BE6660E64780B09685A675865AC; MMCASM=ID=5ED476D17FE34456868B578D618D2054; SRCHD=AF=M403J9; SRCHUID=V=2&GUID=B23F453BA267455AAA96A60B73AC1704&dmnchg=1; _tarLang=default=en; _TTSS_OUT=hist=WyJlbiJd; _TTSS_IN=isADRU=1&hist=WyJtcyIsImlkIiwiYXV0by1kZXRlY3QiXQ==; USRLOC=HS=1&ELOC=LAT=-6.4137701988220215|LON=107.42936706542969|N=Cikampek%2C%20West%20Java|ELT=2|&CLOC=LAT=-6.413755267730631|LON=107.42944015347322|A=733.4464586120832|TS=231221080215|SRC=W; WLS=C=2f5aad3ab178b280&N=Edward; _U=1aNZjDOryxG-YqDEgl-3BuBsX2zs2bFAfo4mzamks_h5oNei-W9RvmQILjrDTEpm500kCRHHFqkEnRhkLY35lnjn4VU7rPsfQM3m3PhdUP8YAQzskrR1-LXt6bOShiCjJbcmNj_ODjQ72YgRXO5vvMkN7BaSo9SQMXXw_oHNG_UP-zgb1NrhHI0JyHXWDghbXhPkoi_rtYslHnmNEk2KOuHD3Gk7Wo0WW8nv7vQbTFaM; ANON=A=86FA8C850A45E9DE90981170FFFFFFFF; SRCHS=PC=U531; SRCHUSR=DOB=20231106&T=1703145849000; _Rwho=u=d; _EDGE_S=SID=1943103DE54D69AB291203D3E4266875&mkt=en-id; ipv6=hit=1703149467917&t=4; _RwBf=r=0&ilt=4&ihpd=0&ispd=1&rc=0&rb=0&gb=0&rg=0&pc=0&mtu=0&rbb=0&g=0&cid=&clo=0&v=2&l=2023-12-21T08:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=MSAAUTOENROLL&c=MR000T&t=3745&s=2023-12-21T08:04:09.0832537+00:00&ts=2023-12-21T08:04:30.6533805+00:00&rwred=0&wls=2&wlb=0&lka=0&lkt=0&aad=0&TH=&mta=0&ard=0001-01-01T00:00:00.0000000&wle=0&ccp=0&e=8Rn4NL9vMwXGsei_QnwMQAH-iCAib2muXdGdnpEiYFo5hbwIi69c5zsD5PJjZllsuA_Z-ebmjpabJdSoujmH7A; _SS=SID=1943103DE54D69AB291203D3E4266875&PC=U531&R=0&RB=0&GB=0&RG=0&RP=0; SRCHHPGUSR=SRCHLANG=en&IG=879E45A34FE84CD79BD422138602145D&PV=10.0.0&BRW=XW&BRH=M&CW=1912&CH=966&SCW=1897&SCH=2208&DPR=1.0&UTC=420&DM=0&PRVCW=1912&PRVCH=966&HV=1703145878&WTS=63836858761&EXLTT=5&CIBV=1.1390.13; GC=_AiKaXb-An6OZ3UNCSrQdlHXp_266T2pxdpSmG9fAesOmlddH-fnZqU7J7uVLqDlIvqDAt7sDQUC3Gg5k9gNMA; cct=s4-Gyk37GKgNlKJUUL463GlFMDQja07dUfwHfrWBE0KkOLuTzm_tooBe3zTZK527mB7F-LDWkXJwqVdh4pD9SA',
      image: 'base64',
      conversationId: '',
      clientId: '',
      generateImage: true,
      variant: varian
    });
      
    const serverUrl = server.data;
    return serverUrl;
  } catch (error) {
    throw error;
  }
}