import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import moment from 'moment';

function SharePopup({ event }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buildShareUrl = (platform) => {
        // Etkinlik bilgilerini kullanarak paylaşım URL'sini oluştur
        const shareText = `Katılmak istediğim etkinlik: ${event.ad} - ${event.aciklama}, ${moment(
            event.etkinlikBaslangic
        ).format('DD/MM/YYYY HH:mm')}`;

        switch (platform) {
            case 'twitter':
                return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareText)}`;
            case 'instagram':
                // Instagram için özel bir paylaşım URL'si oluşturma işlemi platforma göre farklıdır
                // Instagram API kullanmadan doğrudan paylaşım yapmak kısıtlıdır.
                // Bu nedenle kullanıcıları Instagram'a yönlendirmek daha uygun olabilir.
                return 'https://www.instagram.com/';
            default:
                return '';
        }
    };

    return (
        <>
            <IconButton aria-label="share" onClick={handleOpen}>
                <ShareIcon />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 250,
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        borderRadius: '5px',
                        boxShadow: 24,
                        p: 2,
                    }}
                >
                    <Button startIcon={<TwitterIcon />} onClick={() => window.open(buildShareUrl('twitter'), '_blank')}>
                        Twitter'da Paylaş
                    </Button>
                    <Button startIcon={<FacebookIcon />} onClick={() => window.open(buildShareUrl('facebook'), '_blank')}>
                        Facebook'ta Paylaş
                    </Button>
                    <Button startIcon={<InstagramIcon />} onClick={() => window.open(buildShareUrl('instagram'), '_blank')}>
                        Instagram'da Paylaş
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default SharePopup;
