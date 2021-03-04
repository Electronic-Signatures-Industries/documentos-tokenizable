import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import i18n from 'i18next';

import './newAccountXdv.scss';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const NewAccountXdv = () => {
	const classes = useStyles();
	return (
		<div className="new-account-container">
			<p className="new-account-title">
				{i18n.t('new_account_xdv_title')}
			</p>
			<div className="card-conatiner">
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={Home}
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{i18n.t('new_account_xdv_phrase')}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{i18n.t('new_account_xdv_import')}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							{i18n.t('new_account_xdv_wallet_import')}
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/static/images/cards/contemplative-reptile.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{i18n.t('new_account_xdv_phrase')}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{i18n.t('new_account_xdv_create')}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" className="btn-create">
							{i18n.t('new_account_xdv_wallet_create')}
						</Button>
					</CardActions>
				</Card>
			</div>
		</div>
	)
}

export default NewAccountXdv;
