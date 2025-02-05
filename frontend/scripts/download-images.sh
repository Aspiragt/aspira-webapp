#!/bin/bash

# Crear directorios si no existen
mkdir -p public/images/{hero,categories,experiences}

# Imágenes de hero
curl -L -o public/images/hero/hero-bg.jpg "https://images.unsplash.com/photo-1605216663800-d563eabba48c?q=80&w=2574&auto=format&fit=crop"

# Imágenes de categorías
curl -L -o public/images/categories/adventure.jpg "https://images.unsplash.com/photo-1664939126381-c62c96fc0f68?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/categories/food.jpg "https://images.unsplash.com/photo-1617891907037-60f71927678f?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/categories/wellness.jpg "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/categories/culture.jpg "https://images.unsplash.com/photo-1605217069169-07419828e5b1?q=80&w=1287&auto=format&fit=crop"

# Imágenes de experiencias
# Aventura
curl -L -o public/images/experiences/acatenango.jpg "https://images.unsplash.com/photo-1664939126381-c62c96fc0f68?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/kayak-atitlan.jpg "https://images.unsplash.com/photo-1589477500339-82aeb8718167?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/canopy-tikal.jpg "https://images.unsplash.com/photo-1605216663800-d563eabba48c?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/rafting-cahabon.jpg "https://images.unsplash.com/photo-1530866495561-e37129c6e7ea?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/climbing-baul.jpg "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1287&auto=format&fit=crop"

# Gastronomía
curl -L -o public/images/experiences/maya-cooking.jpg "https://images.unsplash.com/photo-1617891907037-60f71927678f?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/coffee-antigua.jpg "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/ron-tasting.jpg "https://images.unsplash.com/photo-1514362453360-8f94243c9996?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/xela-food.jpg "https://images.unsplash.com/photo-1617891907037-60f71927678f?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/chocolate-workshop.jpg "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1287&auto=format&fit=crop"

# Bienestar
curl -L -o public/images/experiences/yoga-atitlan.jpg "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/temazcal.jpg "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/georginas.jpg "https://images.unsplash.com/photo-1584675576323-4f1f974d3543?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/jade-massage.jpg "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/meditation-ruins.jpg "https://images.unsplash.com/photo-1605217069169-07419828e5b1?q=80&w=1287&auto=format&fit=crop"

# Cultura
curl -L -o public/images/experiences/tikal-tour.jpg "https://images.unsplash.com/photo-1605216663800-d563eabba48c?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/weaving.jpg "https://images.unsplash.com/photo-1599013886413-4d87d6578360?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/maya-ritual.jpg "https://images.unsplash.com/photo-1605217069169-07419828e5b1?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/street-art.jpg "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=1287&auto=format&fit=crop"
curl -L -o public/images/experiences/marimba.jpg "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1287&auto=format&fit=crop"
