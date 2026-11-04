import { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './home-page.styles';

const featuredPlaces = [
  {
    name: 'The Living Room',
    rating: '4.6',
    priceForTwo: '1,200',
    cuisines: 'North Indian, Pasta, Italian, Fast Food',
    location: 'Anna Nagar East, Chennai',
    packagePrice: '2,000',
    enquiries: 342,
    image: 'photo-1514362545857-3bc16c4c7d1b',
  },
  {
    name: 'Black Orchid',
    rating: '4.6',
    priceForTwo: '1,800',
    cuisines: 'Sushi, Asian, Pizza, Japanese',
    location: 'RA Puram, Chennai',
    packagePrice: '2,500',
    enquiries: 218,
    image: 'photo-1470337458703-46ad1756a187',
  },
  {
    name: 'The Thief - Rooftop | Bar',
    rating: '3.9',
    priceForTwo: '2,000',
    cuisines: 'North Indian, Continental, Italian',
    location: 'Nungambakkam, Chennai',
    packagePrice: '2,000',
    enquiries: 196,
    offer: 'Flat 20% OFF',
    image: 'photo-1536935338788846bb9981813',
  },
  {
    name: 'Koox',
    rating: '4.5',
    priceForTwo: '1,600',
    cuisines: 'Japanese, Sushi, Sichuan, Desserts',
    location: 'Nandanam, Chennai',
    packagePrice: '2,200',
    enquiries: 164,
    image: 'photo-1544145945-f90425340c7e',
  },
  {
    name: 'Lower Deck',
    rating: '4.3',
    priceForTwo: '1,500',
    cuisines: 'Continental, Bar Food, Grill',
    location: 'T. Nagar, Chennai',
    packagePrice: '1,800',
    enquiries: 153,
    image: 'photo-1551538827-9c037cb4f32a',
  },
  {
    name: 'Radio Room',
    rating: '4.4',
    priceForTwo: '1,800',
    cuisines: 'Asian, Tapas, Cocktails',
    location: 'Alwarpet, Chennai',
    packagePrice: '2,400',
    enquiries: 147,
    image: 'photo-1513558161293-cda8b47e7ef1',
  },
  {
    name: "Watson's",
    rating: '4.2',
    priceForTwo: '1,400',
    cuisines: 'North Indian, Chinese, Bar Food',
    location: 'Velachery, Chennai',
    packagePrice: '1,700',
    enquiries: 129,
    image: 'photo-1514362545857-3bc16c4c7d1b',
  },
  {
    name: 'IGNNA Cocktail Bar',
    rating: '4.5',
    priceForTwo: '2,000',
    cuisines: 'Cocktails, Small Plates, Asian',
    location: 'Adyar, Chennai',
    packagePrice: '2,600',
    enquiries: 118,
    offer: 'Flat 10% OFF',
    image: 'photo-1470337458703-46ad1756a187',
  },
];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  const layoutWidth = isMounted ? width : 375;
  const isWideLayout = layoutWidth >= 760;

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.wordmark}> 🍻JP BAR<Text style={styles.wordmarkDot}></Text></Text>
            <Text style={styles.location}>North Madras · Chennai📍</Text>
          </View>
          <View style={styles.openBadge}>
            <View style={styles.openDot} />
            <Text style={styles.openText}>OPEN TONIGHT</Text>
          </View>
        </View>

        <ImageBackground
          accessibilityLabel="Cocktails ready to be served at the bar"
          imageStyle={styles.heroImage}
          source={{ uri: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=85' }}
          style={styles.hero}>
          <View style={styles.heroShade} />
          <View style={styles.heroContent}>
            <Text style={styles.heroEyebrow}>GOOD DRINKS. BETTER COMPANY.</Text>
            <Text style={styles.heroTitle}>Your night{ '\n' }starts here.</Text>
            <Text style={styles.heroSubtitle}>A little room for a long evening.</Text>
            {/* <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Reservations', 'Call us at (212) 555-0148 to save your seat.')}
              style={({ pressed }) => [styles.reserveButton, pressed && styles.pressed]}>
              <Text style={styles.reserveButtonText}>BOOK A TABLE</Text>
              <Text style={styles.reserveArrow}>↗</Text>
            </Pressable> */}
          </View>
          {/* <Text style={styles.heroIndex}>01 / 03</Text> */}
        </ImageBackground>
{/*
        <View style={styles.detailsRow}>
          <View style={styles.detailBlock}>
            <Text style={styles.detailLabel}>TONIGHT</Text>
            <Text style={styles.detailValue}>5 PM — LATE</Text>
          </View>
          <View style={styles.detailDivider} />
          <View style={styles.detailBlock}>
            <Text style={styles.detailLabel}>FIND US</Text>
            <Text style={styles.detailValue}>14 Orchard Street</Text>
          </View>
          <Text style={styles.pin}>↗</Text>
        </View> */}

        <View style={styles.placesSection}>
          <Text style={styles.placesHeading}>Popular bars & restaurants</Text>
          <View style={styles.placesList}>
            {featuredPlaces.map((place) => (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`View ${place.name}`}
                key={place.name}
                onPress={() => router.push({
                  pathname: '/venue-detail',
                  params: {
                    name: place.name,
                    rating: place.rating,
                    priceForTwo: place.priceForTwo,
                    cuisines: place.cuisines,
                    location: place.location,
                    image: place.image,
                    offer: place.offer ?? '',
                  },
                })}
                style={({ pressed }) => [
                  styles.placeCard,
                  pressed && styles.pressed,
                ]}>
                <View style={[
                  styles.placeImageWrap,
                  { width: isWideLayout ? '27%' : '38%' },
                ]}>
                  <Image
                    accessibilityLabel={`${place.name} venue`}
                    source={{ uri: `https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=720&h=480&q=85` }}
                    style={styles.placeImage}
                  />
                  {place.offer ? (
                    <View style={styles.placeOffer}>
                      <Text style={styles.placeOfferText}>✿  {place.offer}</Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.placeDetails}>
                  <Text numberOfLines={1} style={styles.placeName}>{place.name}</Text>
                  <Text numberOfLines={1} style={styles.placeLocation}>📍 {place.location}</Text>
                  <View style={styles.placeRatingRow}>
                    <Text style={styles.placeStars}>★★★★☆</Text>
                    <Text style={styles.placeRating}>{place.rating} / 5</Text>
                    <Text style={styles.placeType}>Rated by guests</Text>
                  </View>
                  <Text numberOfLines={2} style={styles.placeCuisine}>🍴 {place.cuisines}</Text>
                  <Text numberOfLines={1} style={styles.placePackage}>🍸 Alcohol package starts from ₹{place.packagePrice} per person</Text>
                  <Text style={styles.placeEnquiries}>{place.enquiries} people enquired this venue</Text>
                  {!isWideLayout ? (
                    <View style={styles.mobilePriceRow}>
                      <Text style={styles.mobilePrice}>₹{place.priceForTwo} for two</Text>
                      <Text style={styles.enquireButton}>Enquire Venue</Text>
                    </View>
                  ) : null}
                </View>
                {isWideLayout ? (
                  <View style={styles.placePriceColumn}>
                    <Text style={styles.menuStarts}>Menu starts from</Text>
                    <Text style={styles.placePrice}>₹{place.priceForTwo}</Text>
                    <Text style={styles.enquireButton}>Enquire Venue</Text>
                  </View>
                ) : null}
              </Pressable>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}