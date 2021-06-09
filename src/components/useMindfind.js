import { useState, useEffect } from "react";
const axios = require('axios');

const useMindfind = () => {
  const [intentData, setIntentData] = useState(null);
  const [linkData1, setLinkData1] = useState(null);
  const [linkData2, setLinkData2] = useState(null);
  const [linkData3, setLinkData3] = useState(null);
  const [linkData4, setLinkData4] = useState(null);
  const [linkData5, setLinkData5] = useState(null);
  const [linkData6, setLinkData6] = useState(null);
  const [linkData7, setLinkData7] = useState(null);
  const [linkData8, setLinkData8] = useState(null);
  const [linkData9, setLinkData9] = useState(null);
  const [linkData10, setLinkData10] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      fetch('/proxy/api/get/intent')
        .then((response) => response.json())
        .then(async (intentResult) => {
          setIntentData(intentResult);

          var intents = intentResult.results;
          for (var i = 0; i < intents.length; i++) {
            (async () => {
              const j = i;
              var urlResponse = await axios.get(`/proxy/api/get/url?intentScore=${intents[j].intentScore}`);
              if (j === 0) setLinkData1(urlResponse.data);
              if (j === 1) setLinkData2(urlResponse.data);
              if (j === 2) setLinkData3(urlResponse.data);
              if (j === 3) setLinkData4(urlResponse.data);
              if (j === 4) setLinkData5(urlResponse.data);
              if (j === 5) setLinkData6(urlResponse.data);
              if (j === 6) setLinkData7(urlResponse.data);
              if (j === 7) setLinkData8(urlResponse.data);
              if (j === 8) setLinkData9(urlResponse.data);
              if (j === 9) setLinkData10(urlResponse.data);
            })();
          }
        });
    };
    fetchData();
  }, []);

  return { 
    intentData,
    linkData1,
    linkData2,
    linkData3,
    linkData4,
    linkData5,
    linkData6,
    linkData7,
    linkData8,
    linkData9,
    linkData10
   };
};

export default useMindfind;