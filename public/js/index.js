async function scan(para1) {
    // const form = new FormData();
    // form.append('organs', 'auto');
    const myimg = para1;
    // form.append('images', myimg); // Assuming 'face-image' is an input type="file"

    const project = 'all'; // Set your project here

    const apiUrl = 'https://my-api.plantnet.org/v2/identify/' + project + '?api-key=2b10NQdJJyocrSGzmVwi0BXdNu';

    const formData = new FormData();
        formData.append('organs', 'auto');
        formData.append('images', myimg);

        try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
            mode: "cors",
        });

        if (response.ok) {
            const data = await response.json();
            display(data);
            console.log(data); // This will contain the identification results
        } else if(response.status === 404) {
            console.error('Species Not Found');
            var title = "<div class= 'one-title'> 이건 무슨 종이죠?... </div>"
            $('.result-message').html(title);
            $('#loading').hide();
        } else if(response.status === 400) {
            console.error('File type error maybe BAD REQ')
            var title = "<div class= 'one-title'> 인터넷 상태 확인해주세용 or 파일은 jpg 나 png! </div>"
            $('.result-message').html(title);
            $('#loading').hide();
        }
        } catch (error) {
        console.error('Error:', error);
        }
    }

//     let URL;
//     const urlTrait = "https://teachablemachine.withgoogle.com/models/qlgWSAE9c/";
//     // const urlParty = "https://teachablemachine.withgoogle.com/models/TESSMoTwO/";
//     const urlParty = "https://teachablemachine.withgoogle.com/models/eIDS62-YZ/";
//     let model, webcam, labelContainer, maxPredictions;
//     async function init() {
//         if (document.getElementById("type").checked) {
//             URL = urlTrait;
//         } else {
//             URL = urlParty;
//         }
//         const modelURL = URL + "model.json";
//         const metadataURL = URL + "metadata.json";
//         model = await tmImage.load(modelURL, metadataURL);
//         maxPredictions = model.getTotalClasses();
//         labelContainer = document.getElementById("label-container");
//         for (let i = 0; i < maxPredictions; i++) {
//             var element = document.createElement("div")
//             element.classList.add("d-flex");
//             labelContainer.appendChild(element);
//         }
//     }
    async function display(data) {

        const color = ['theminjoo', 'gukhim', 'jongeui','romantic', 'stable','free_spirited','intellectual','adventurous','loyal','spontaneous','emotional'];
        let shuffled = color.sort((a, b) => 0.5 - Math.random());
        labelContainer = document.getElementById("label-container");
        let sum = 0;
        for (let i = 0; i <= 9; i++) {
            sum += data['results'][i]['score'];
            var element = document.createElement("div");
            element.classList.add("d-flex");
            labelContainer.appendChild(element);
        }
        let best_name = data['bestMatch'];
        let best_family = data['results'][0]['species']['family']['scientificNameWithoutAuthor'];
        
        let lst_common_names = data['results'][0]['species']['commonNames'];
        
        let common_names = "흔히 알려진 이름이 없습니당.."
        if (lst_common_names.length != 0) {

            common_names = lst_common_names[0];

            for (let i = 1; i<lst_common_names.length; i++) {
                common_names = common_names + ", " + lst_common_names[i];
            }
        }

        var resultTitle, resultExplain, resultCeleb;
        resultTitle = best_name

        resultExplain = "널리 알려진 이름(aka.): " + common_names;
        resultCeleb = "종(Family):" + best_family;
        var title = "<div class='" + shuffled[10] + "-animal-title'>" + resultTitle + "</div>"
        var explain = "<div class='animal-explain pt-2'>" + resultExplain + "</div>"
        var celeb = "<div class='" + shuffled[10] + "-animal-celeb pt-2 pb-2'>" + resultCeleb + "</div>"
        $('.result-message').html(title + explain + celeb);
        var barWidth;

        for (let i = 0; i <= 9; i++) {

            let p_name = data['results'][i]['species']['scientificNameWithoutAuthor'];

            let p_common_names = data['results'][i]['species']['commonNames'];

            if (((data['results'][i]['score'])/sum).toFixed(2) > 0.1) {
                barWidth = Math.round(((data['results'][i]['score'])/sum).toFixed(2) * 100) + "%";
            } else if (((data['results'][i]['score'])/sum).toFixed(2) >= 0.01) {
                barWidth = "4%"
            } else {
                barWidth = "2%"
            }

            var labelTitle;
            var label;
            label = "<div class='animal-label d-flex align-items-center' style='font-size: 0.85em'>" +  p_name + "</div>";
            var bar = "<div class='bar-container position-relative container'><div class='" + shuffled[i] + "-box'></div><div class='d-flex justify-content-center align-items-center " + shuffled[i] + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(((data['results'][i]['score'])/sum).toFixed(2) * 100) + "%</span></div></div>"
            labelContainer.childNodes[i].innerHTML = label + bar;
        }
        $('#loading').hide();
    }