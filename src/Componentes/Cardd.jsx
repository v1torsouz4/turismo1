import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Cardd() {
  return (
    <div className='card'> 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="src\imagens\acre.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Acre
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Acre é um estado no noroeste do Brasil, na Floresta
Amazónica. É conhecido pela quantidade de árvores-da-borracha e castanhas-do-brasil. Na fronteira peruana, a
oeste, o Parque Nacional da Serra do Divisor possui
montanhas elevadas e várias quedas de água, além de
diversas espécies animais, como tatus-gigantes, tapires e
aves raras. A sudeste, encontra-se Rio Branco, a capital do
estado, nas margens do rio Acre.
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
        image="src\imagens\amapá.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amapá
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Amapá é um estado no norte do Brasil que faz fronteira
com o Suriname, a Guiana Francesa e o Oceano Atlântico.
A floresta amazónica abrange uma grande parte da sua
área e o rio Oiapoque faz parte da sua fronteira a norte.
No sul, a capital, Macapá, é conhecida pela Fortaleza de
São José de Macapá, situada à beira-mar, um forte
português do século XVIII, e pelo Monumento do Marco
Zero, um obelisco que marca o equador.
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
        image="src\imagens\amazonaas.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amazonas
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A floresta tropical amazônica, que cobre boa parte do
noroeste do Brasil e se estende até a Colômbia, o Peru e
outros países da América do Sul, é a maior floresta tropical
do mundo, famosa por sua biodiversidade. Ela é
atravessada por milhares de rios, entre eles o grandioso rio
Amazonas. Entre as cidades ribeirinhas, com arquitetura
do século XIX que data do início da exploração de
borracha, destacam-se Manaus e Belém, no Brasil, e
Iquitos e Puerto Maldonado, no Peru.
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
        image="src\imagens\pará.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pará
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pará, um estado no norte do Brasil, é onde se encontra o
Parque Nacional da Amazônia. Protegendo uma extensa
faixa da exuberante e densa Floresta Amazônica, o parque
é lar de milhares de espécies da vida selvagem. Boa parte
dela é alagada todos os anos, tornando o acesso a áreas
distantes somente por barco. Próxima da desembocadura
do Rio Amazonas está Belém, a capital do Pará. Ela é
conhecida pela arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>

 </div>
  );
}

