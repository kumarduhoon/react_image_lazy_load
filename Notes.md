# Lazy load Image In React 
## 1st way 
## Using with the react-intersection-observer "npm i react-intersection-observer"
###  if you want to know deeply then go to this link [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

## 2nd way 
## using with the loadable-image "npm i loadable-image"
###  if you want to know deeply then go to this link [loadable-image](https://www.npmjs.com/package/loadable-image)


### Responsive image
```javascript 
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: "100%", height: "auto", aspectRatio: 16 / 9 }}
/> 
```