import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Segundafileiracard() {
 
    return (
        <div className='cardsegunda'> 
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="src\imagens\rondonia.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rondônia 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Rondônia é uma das 27 unidades federativas do Brasil.
Está localizado na região Norte e tem como limites os
estados de Mato Grosso a leste, Amazonas a norte, Acre a
oeste e o Estado Plurinacional da Bolívia a oeste e sul.
            </Typography>
          </CardContent>
          <CardActions>
                <Button size="small">Saiba mais</Button>
          </CardActions>
    
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="src\imagens\roraima.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Roraima
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Roraima, o estado mais a norte do Brasil, é conhecido
pela Floresta Amazónica. A capital, Boa Vista, na margem
oeste de Rio Branco, fica próxima dos parques nacionais
da Serra da Mocidade, a sudoeste, e do Monte Roraima, a
norte. Com penhascos íngremes e um misterioso cume
plano, o Monte Roraima, partilhado com a Venezuela e a
Guiana, foi, presumivelmente, a inspiração de Sir Arthur
Conan Doyle para "O Mundo Perdido".
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba mais</Button>
          </CardActions>
        </Card>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="src\imagens\tocantins.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Tocantis
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Tocantins é um estado no centro do Brasil. Caracteriza-se
pelo cerrado (prado seco e matagais), rios vastos e
plantações de soja. A capital moderna, Palmas, foi
construída propositadamente no centro geográfico do
estado e está rodeada de colinas arborizadas.
Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é
um destino de ecoturismo conhecido pelos trilhos de
caminhada e pelas quedas de água.
</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba mais</Button>
          </CardActions>
        </Card>
    </div>
      );
}
