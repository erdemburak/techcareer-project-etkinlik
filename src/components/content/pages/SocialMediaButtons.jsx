import React from 'react';

const SocialMediaButtons = ({ title, description, image }) => {
  const shareOnFacebook = () => {
    const currentURL = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}&quote=${encodeURIComponent(description)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnInstagram = () => {
    const currentURL = window.location.href;
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(currentURL)}&title=${encodeURIComponent(title)}&caption=${encodeURIComponent(description)}&media=${encodeURIComponent(image)}`;
    window.open(instagramUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const currentURL = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(description)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div id="social-share-buttons">
      <button onClick={shareOnFacebook}>Facebook</button>
      <button onClick={shareOnInstagram}>Instagram</button>
      <button onClick={shareOnTwitter}>Twitter</button>
    </div>
  );
};

export default SocialMediaButtons;