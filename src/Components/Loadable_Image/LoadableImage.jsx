import React from 'react'
import { AsyncImage } from 'loadable-image'
import axios from 'axios'
import { Grow } from 'transitions-kit'
import "./LoadableImage.css"

function LoadableImage() {
    const [images, setImages] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    async function getImage() {
        try {
            setIsLoading(true)
            let res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
            setImages(res.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw new error
        }
    }
    React.useEffect(() => {
        getImage()
    }, [])
    console.log(images)
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 justify-center">
                {
                    isLoading ? <div>Loading ..... </div> :
                        images.length > 0 && images.map((item) => (
                            <div key={item.id}>
                                <AsyncImage
                                    src={item.url}
                                    style={{ width: 400, height: 350 }}
                                    Transition={Grow}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default LoadableImage
















{/* <AsyncImage
src={item.url}
style={{ width: 150, height: 150 }}
Transition={Grow} */}
// loader={<div style={{ background: '#888' }} />}
// loader={<img src='smallImage.jpg' style={{ filter: 'blur(25px)' }} />}
// error={<div style={{ background: '#222' }} />}
// />