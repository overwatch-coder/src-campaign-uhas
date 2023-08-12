import React from 'react'
import HeroComponent from '@/components/HeroComponent'
import GalleryIntro from '@/components/gallery/Gallery'
import { gallery1, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery2, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery3, gallery30, gallery31, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9 } from '@/assets'
import GalleryCard from '@/components/gallery/GalleryCard'



export const metadata = {
  title: 'Gallery | JFSRC'
}

const Gallery = () => {
const images = [
  { id: 1, src: gallery1, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 2, src: gallery2, alt: 'A beautiful landscape', title: 'Landscape'},
  { id: 3, src: gallery3, alt: 'A beautiful landscape', title: 'Landscape'},
  { id: 4, src: gallery4, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 5, src: gallery5, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 6, src: gallery6, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 7, src: gallery7, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 8, src: gallery8, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 9, src: gallery9, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 10, src: gallery10, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 11, src: gallery11, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 12, src: gallery12, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 13, src: gallery13, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 14, src: gallery14, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 15, src: gallery15, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 16, src: gallery16, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 17, src: gallery17, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 18, src: gallery18, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 19, src: gallery19, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 20, src: gallery20, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 21, src: gallery21, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 22, src: gallery22, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 23, src: gallery23, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 24, src: gallery24, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 25, src: gallery25, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 26, src: gallery26, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 27, src: gallery27, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 28, src: gallery28, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 29, src: gallery29, alt: 'A beautiful landscape', title: 'Landscape',},
  { id: 30, src: gallery30, alt: 'A beautiful landscape', title: 'Landscape',},
  // { id: 31, src: gallery31, alt: 'A beautiful landscape', title: 'Landscape',},

];

  return (
    <section>
      <HeroComponent 
        image={gallery1}
        route='Gallery'
      >
        <span className='text-yellow-600'>#VaMiDzo</span>
        <span className=''>Gallery</span>
      </HeroComponent>
      <GalleryIntro />
      <div className="grid grid-cols-3 gap-4 d-flex justify-center items-center my-10">
        {images.map((image) => (
          <GalleryCard
            key={image.id}
            src={image.src}
            id={image.id}
            title={image.title}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  )
}



export default Gallery