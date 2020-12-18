window.onload = () => {
    const body = document.getElementsByTagName('body')[0]

    const exercises = 
    ['Drum Kit', 
    'Flex Panel Gallery',
    'Hold Shift And Check Checkbox', 
    'Key Sequence Detection', 
    'Slide In On Scroll', 
    'Mouse Move Shadow', 
    'Sort Without Articles', 
    'Sticky Nav', 
    'Click And Drag']

    const sources = {
        drumKit: 
        './01 - JavaScript Drum Kit/index-START.html',
        flexPanelGallery: 
        './05 - Flex Panel Gallery/index-START.html',
        holdShiftAndCheckCheckbox: 
        './10 - Hold Shift and Check Checkboxes/index-START.html',
        keySequenceDetection: 
        './12 - Key Sequence Detection/index-START.html',
        slideInOnScroll: 
        './13 - Slide in on Scroll/index-START.html',
        mouseMoveShadow: 
        './16 - Mouse Move Shadow/index-START.html',
        sortWithoutArticles: 
        './17 - Sort Without Articles/index-START.html',
        stickyNav: 
        './24 - Sticky Nav/index-START.html',
        clickAndDrag: 
        './27 - Click and Drag/index-START.html'
    }

    createHtmlStructure(body, exercises, sources)
}

createHtmlStructure = (body, exercises, sources) => {
    const createSectionExercises = 
    document.createElement('section')

    createSectionExercises.classList.add('exercises')
    body.appendChild(createSectionExercises)

    exercises.forEach((exerciseName, index) => {
        const createArticleExercise = 
        document.createElement('article')

        createArticleExercise
        .classList.add(exerciseName.replace(/ /g, ''))

        createSectionExercises
        .appendChild(createArticleExercise)

        if(index === exercises.length - 1) {
        stylePage(body, createSectionExercises, sources)
        }
    })
}

stylePage = (body, exercises, sources) => {
    
    const exercise = []
    .slice.call(document
    .getElementsByClassName('exercises')[0]
    .children)


    body.style.background = 'whitesmoke'
    body.style.width = '100%'
    body.style.height = '100%'
    body.style.margin = 'auto'

    exercises.style.minHeight = '100vh'
    exercises.style.width = '100vw'
    exercises.style.display = 'flex'
    exercises.style.justifyContent = 'center'
    exercises.style.alignItems = 'center'
    exercises.style.flexWrap = 'wrap'

    exercise.forEach((article) => {
        article.style.height = '300px'
        article.style.width = '500px'
        article.style.margin = '20px'
        article.style.borderRadius = '5px'
        article.style.display = 'flex'
        article.style.justifyContent = 'center'
        article.style.alignItems = 'center'
        article.style.background = '#61925129'

        displayAndLinkExercises(article, sources)
    })
}

displayAndLinkExercises = (article, sources) => {

    let toggleSource = ''

    for (const src in sources) {
        if(src.toLowerCase() === article.className.toLowerCase()) {
        toggleSource = sources[src]
        }
    }

    const articleName = article.className

    const addSpaceBeforeUppercase = 
    articleName.replace(/([a-z])([A-Z])/g, "$1 $2")

    const createTitle = document.createElement('h2')
    createTitle.innerHTML = `${addSpaceBeforeUppercase}`
    article.appendChild(createTitle)

    createTitle.addEventListener('click', () => {
        window.open(toggleSource, 'blank')
    })

    createTitle.addEventListener('mouseover', () =>  {
        createTitle.style.cursor = 'pointer'
    })
}