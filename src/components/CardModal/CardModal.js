import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

var card_style = { 'max-width':'445px', 'margin': '10px'};
var card_media_style = { 'height': '0', 'padding-top': '56.25%'}
var div_style = {'width':'100%', 'display': 'inline-flex'}

class CardModal extends Component {

    render() {
        return (
            <div>
                <div style={div_style}>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Campari House
                            </Typography>
                            <Typography component="p">
                                Though it may sound like the Melbourne consulate for Italy’s much-loved bitter red aperitif
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (1).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Carlton Brewhouse
                            </Typography>
                            <Typography component="p">
                                The Carlton Brewhouse is located at the iconic Carlton &amp; United Brewery in Abbotsford and is the official home of Australia’s most popular draught beer,
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (2).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Mofo Lounge
                            </Typography>
                            <Typography component="p">
                                Prahran's Mofo Lounge is a venue that specialises in intimate social events – when it's not a public bar
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div style={div_style}>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Campari House
                            </Typography>
                            <Typography component="p">
                                Though it may sound like the Melbourne consulate for Italy’s much-loved bitter red aperitif
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (1).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Carlton Brewhouse
                            </Typography>
                            <Typography component="p">
                                The Carlton Brewhouse is located at the iconic Carlton &amp; United Brewery in Abbotsford and is the official home of Australia’s most popular draught beer,
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (2).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Mofo Lounge
                            </Typography>
                            <Typography component="p">
                                Prahran's Mofo Lounge is a venue that specialises in intimate social events – when it's not a public bar
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default CardModal