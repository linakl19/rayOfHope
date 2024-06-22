const communityPrograms = {
    nutrition: {
        title:"Nutrition Program",
        img_Src: "../../static/programs_nutrition.jpg",
        img_Alt: "Three girls eating crackers",
        text: "RRH launched a multi-faceted nutrition program in Spring 2022, which includes serving meals to students in school, sending students home with food and supplies to support the nutritional needs of their whole family, and distributing food packages to other families in need in our community.",
    }, 
    health: {
        title:"Menstrual & Hygiene Health",
        img_Src: "../../static/programs_health.jpg",
        img_Alt: "Menstrual hygiene products",
        text: "RRH’s Menstrual Health and Hygiene Program distributes hygiene essentials to over 2,000 girls and women, with provisions of menstrual products, laundry and body soap, shampoo, and new underwear.",
    },
    widows: {
        title:"Widows' Program",
        img_Src: "../../static/programs_widows.jpg",
        img_Alt: "Afghan woman",
        text: "To ease the suffering of Afghan women who have lost their husbands, in 2021 Razia's Ray of Hope began collaborating with Beyond the 11th, a humanitarian organization that partners with international aid groups to provide job training and economic opportunity to Afghan widows.",
    },
    clothing: {
        title:"Clothing Distribution",
        img_Src: "../../static/programs_clothing.jpg",
        img_Alt: "Three girls. Each one is holding a bag with clothes.",
        text: "RRH is proud to provide uniforms to students who may otherwise miss school due to lack of appropriate clothing. In addition to uniforms we distribute clothing such as coats and shoes.",
    },
    library: {
        title:"Mobile Library",
        img_Src: "../../static/programs_library.jpg",
        img_Alt: "Mobile library.",
        text: "Afghanistan’s 7-12th grade girls are banned from the classroom. Our Mobile Library delivers books to out-of-school adolescent girls to support ongoing literacy and recreational reading for homebound girls. The Mobile Library serves the literacy of over 600 adolescent girls who would otherwise not have access to books outside of their homes.",
    }
}
// Select all anchor tags that link to the community programs info div
const communityTags = document.querySelectorAll('a[href="#community__programs-info-div"]');

// Function to handle the click event on program links
const programPressed = (e) => {
    e.preventDefault();
    const programId =e.target.id;  // Get ID of Clicked Anchor Tag
    updateProgramInfo(communityPrograms, programId);
}

//Community programs anchor tags - Event listeners
communityTags.forEach(programTag => {
    programTag.addEventListener("click", programPressed);
});

//Community programs info div - Update content functions 
const updateProgramInfo = (programs, programId) => {
    const { title, text, img_Src, img_Alt } = programs[programId];
    updateProgramTitle(title);
    updateProgramParagraph(text);
    updateProgramImg(img_Src, img_Alt);
};

// Update the program title
const updateProgramTitle = (title) => {
    const programTitle = document.querySelector(".community-info-title");
    programTitle.innerHTML = title;
};

// Update the program paragraph
const updateProgramParagraph = (text) => {
    const programParagraph = document.querySelector(".community-info-paragraph");
    programParagraph.innerHTML = text;
};

// Update the program image
const updateProgramImg = (src, alt) => {
    const programImg = document.querySelector(".community-img");
    programImg.src = src;
    programImg.alt = alt;
}

// for (let programTag of communityTags) {
//     programTag.addEventListener("click", programPressed);
// }

// const updateProgramInfo = (obj, programId)=>{
//     updateProgramTitle(obj, programId);
//     updateProgramParagraph(obj, programId);
//     updateProgramImg(obj, programId);
// };

// const updateProgramTitle = (obj, programId) => {
//     const programTitle = document.querySelector(".community-info-title");
//     programTitle.innerHTML = obj[programId].title;
// }

// const updateProgramParagraph = (obj, programId) => {
//     const programParagraph = document.querySelector(".community-info-paragraph");
//     programParagraph.innerHTML = obj[programId].text;
// }

// const updateProgramImg = (obj, programId)=>{
//     const programImg = document.querySelector(".community-img");
//     programImg.src = obj[programId].img_Src;
//     programImg.alt = obj[programId].img_Alt;
// }