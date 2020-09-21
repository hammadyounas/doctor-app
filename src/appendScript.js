
const importScript = resourceUrl => {

    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);


};
export default importScript;