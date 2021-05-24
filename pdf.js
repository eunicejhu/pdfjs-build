import pdfjsLib from 'pdfjs-dist'

const pdfUrl = "/PasseportRomainHourdry1.pdf"
    const pdfLoading = pdfjsLib.getDocument(pdfUrl)
    pdfLoading.promise.then((pdf) => {
      console.log({pdf})
      pdf.getPage(1).then(page => {
        console.log(page.__proto__.getViewport)
        const proto_page = page.__proto__
        const viewport = page.__proto__.getViewPort({scale: 1})
        
        const targetWidth = 1280
        const scale = Math.max(targetWidth/viewport.width, 2)
        const scaledViewport = page.__proto__.getViewPort({scale})
        
        const canvas = document.createElement("canvas")
        canvas.getContext("2d")
        canvas.width = scaledViewport.width
        canvas.height = scaledViewport.height

        const ctx = canvas.getContext("2d")
        var renderContext = { canvasContext: ctx, viewport: scaledViewport }

        page.render(renderContext)

        // draw image
        imageSrc = ctx.toDataURL()

        const image = document.createElement("img")
        image.src = imageSrc
        image.width = 200
        image.height = 200
        document.body.append(image)
      })
    }).catch((e) => {
      console.error(e)
    })