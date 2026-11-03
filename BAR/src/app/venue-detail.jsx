import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = ['Overview', 'Menu', 'Photos', 'Reviews'];

function getParam(value) {
  return Array.isArray(value) ? value[0] : value;
}

export default function VenueDetailScreen() {
  const params = useLocalSearchParams();
  const name = getParam(params.name) || 'Venue';
  const rating = getParam(params.rating);
  const priceForTwo = getParam(params.priceForTwo);
  const cuisines = getParam(params.cuisines) || 'Ask the venue for details.';
  const location = getParam(params.location) || 'Location unavailable';
  const image = getParam(params.image);
  const offer = getParam(params.offer);
  const [selectedTab, setSelectedTab] = useState('Overview');
  const [selectedOfferType, setSelectedOfferType] = useState('BOOKING OFFER');
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const isWide = isMounted && width >= 900;

  function renderTabContent() {
    if (selectedTab === 'Menu') {
      return (
        <Text style={styles.description}>
          Contact the venue for its latest menu and availability.
        </Text>
      );
    }

    if (selectedTab === 'Photos') {
      return image ? (
        <Image
          accessibilityLabel={`${name} photo`}
          source={{ uri: `https://images.unsplash.com/${image}?auto=format&fit=crop&w=1000&h=700&q=85` }}
          style={styles.tabPhoto}
        />
      ) : (
        <Text style={styles.description}>Venue photos are not available.</Text>
      );
    }

    if (selectedTab === 'Reviews') {
      return (
        <View style={styles.reviewContent}>
          <Text style={styles.reviewRating}>{rating || '--'}</Text>
          <Text style={styles.description}>Guest reviews are not available yet.</Text>
        </View>
      );
    }

    return (
      <View style={styles.overviewBox}>
        <Text style={styles.sparkle}>✧</Text>
        <Text style={styles.description}>
          {name} is a bar and dining spot in {location}, serving {cuisines}.
          Contact the venue for current timings, prices and availability.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back to bars and restaurants"
          onPress={() => router.back()}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>BACK TO PLACES</Text>
        </Pressable>

        {image ? (
          <Image
            accessibilityLabel={`${name} venue`}
            source={{ uri: `https://images.unsplash.com/${image}?auto=format&fit=crop&w=1600&h=700&q=85` }}
            style={styles.venueImage}
          />
        ) : null}

        <View style={[styles.mainLayout, isWide && styles.mainLayoutWide]}>
          <View style={[styles.venueInfo, isWide && styles.venueInfoWide]}>
            <View style={styles.titleRow}>
              <View style={styles.titleCopy}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.cuisines}>{cuisines}</Text>
                <Text style={styles.priceNote}>
                  {priceForTwo ? `₹${priceForTwo} for two approx.` : 'Ask the venue for current prices'}
                </Text>
              </View>
              <View style={styles.ratingCard}>
                <Text style={styles.ratingValue}>🌟 {rating || '--'}</Text>
                <Text style={styles.ratingCaption}>VENUE RATING</Text>
              </View>
            </View>

            <View style={styles.quickActions}>
              <View style={styles.openBadge}>
                <Text style={styles.openText}>Hours may vary</Text>
                <Text style={styles.chevron}>⌄</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                onPress={() => Alert.alert('Call venue', 'Contact details are not available yet.')}
                style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}>
                <Text style={styles.iconText}>☎</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => Alert.alert('Directions', `Find ${name} at ${location}.`)}
                style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}>
                <Text style={styles.iconText}>●</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => Alert.alert('Share', 'Sharing is not available yet.')}
                style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}>
                <Text style={styles.iconText}>↗</Text>
              </Pressable>
            </View>

            <View style={styles.tabs}>
              {tabs.map((tab) => {
                const isSelected = selectedTab === tab;
                return (
                  <Pressable
                    accessibilityRole="tab"
                    accessibilityState={{ selected: isSelected }}
                    key={tab}
                    onPress={() => setSelectedTab(tab)}
                    style={styles.tabButton}>
                    <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>{tab}</Text>
                    {isSelected ? <View style={styles.tabUnderline} /> : null}
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.tabPanel}>{renderTabContent()}</View>
          </View>

          <View style={[styles.offersPanel, isWide && styles.offersPanelWide]}>
            <Text style={styles.offersTitle}>Offers for you</Text>
            <View style={styles.offerTypes}>
              {['BOOKING OFFER', 'WALK-IN OFFER'].map((offerType) => {
                const isSelected = selectedOfferType === offerType;
                return (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ selected: isSelected }}
                    key={offerType}
                    onPress={() => setSelectedOfferType(offerType)}
                    style={[styles.offerTypeButton, isSelected && styles.offerTypeSelected]}>
                    <Text style={[styles.offerTypeText, isSelected && styles.offerTypeTextSelected]}>
                      {offerType}
                    </Text>
                    <Text style={styles.offerSubtext}>Check availability</Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.offerCard}>
              <Text style={styles.offerEyebrow}>RESTAURANT OFFER</Text>
              <View style={styles.offerDescription}>
                <Text style={styles.offerIcon}>％</Text>
                <Text style={styles.offerValue}>{offer || 'Ask venue for current offers'}</Text>
              </View>
              <View style={styles.offerDivider} />
              <Text style={styles.addOnTitle}>MORE INFORMATION</Text>
              <Text style={styles.offerFootnote}>
                {selectedOfferType === 'BOOKING OFFER'
                  ? 'Confirm offer details with the venue before booking.'
                  : 'Walk-in offers and availability may vary.'}
              </Text>
            </View>

            <View style={styles.offerDots}>
              <View style={styles.activeDot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <View style={styles.ctaRow}>
              <Pressable
                accessibilityRole="button"
                onPress={() => Alert.alert('Booking', 'Contact the venue to confirm your booking.')}
                style={({ pressed }) => [styles.bookButton, pressed && styles.pressed]}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => Alert.alert('Pay Bill', 'Bill payment is not available yet.')}
                style={({ pressed }) => [styles.payButton, pressed && styles.pressed]}>
                <Text style={styles.payButtonText}>Pay Bill</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1eee5',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  backButton: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backArrow: {
    color: '#26372b',
    fontSize: 22,
  },
  backText: {
    color: '#26372b',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.9,
  },
  venueImage: {
    width: '100%',
    height: 300,
    borderRadius: 6,
    backgroundColor: '#d7d4ca',
  },
  mainLayout: {
    paddingTop: 22,
  },
  mainLayoutWide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
  },
  venueInfo: {
    minWidth: 0,
  },
  venueInfoWide: {
    flex: 1.8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  titleCopy: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    color: '#111813',
    fontSize: 30,
    fontWeight: '800',
  },
  location: {
    color: '#68716b',
    fontSize: 15,
    marginTop: 5,
  },
  cuisines: {
    color: '#68716b',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },
  priceNote: {
    color: '#68716b',
    fontSize: 14,
    marginTop: 7,
  },
  ratingCard: {
    minWidth: 110,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#dedbd3',
    borderRadius: 16,
    backgroundColor: '#fffefa',
  },
  ratingValue: {
    color: '#111813',
    fontSize: 21,
    fontWeight: '700',
  },
  ratingCaption: {
    color: '#68716b',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 5,
  },
  quickActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  openBadge: {
    minHeight: 46,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    backgroundColor: '#f7f7f5',
    borderRadius: 12,
  },
  openText: {
    color: '#15986a',
    fontSize: 14,
    fontWeight: '700',
  },
  chevron: {
    color: '#68716b',
    fontSize: 20,
  },
  iconButton: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f5',
    borderRadius: 12,
  },
  iconText: {
    color: '#68716b',
    fontSize: 20,
    fontWeight: '700',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#e1ded6',
  },
  tabButton: {
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  tabText: {
    color: '#68716b',
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextSelected: {
    color: '#111813',
    fontWeight: '800',
  },
  tabUnderline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -1,
    height: 3,
    backgroundColor: '#f05a3b',
    borderRadius: 2,
  },
  tabPanel: {
    minHeight: 118,
    justifyContent: 'center',
    paddingTop: 20,
  },
  overviewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: '#fff7df',
    borderLeftWidth: 3,
    borderLeftColor: '#ffb547',
    borderRadius: 12,
  },
  sparkle: {
    color: '#5d5547',
    fontSize: 24,
  },
  description: {
    flex: 1,
    color: '#27312b',
    fontSize: 14,
    lineHeight: 21,
  },
  tabPhoto: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reviewRating: {
    color: '#168345',
    fontSize: 22,
    fontWeight: '800',
  },
  offersPanel: {
    marginTop: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dedbd3',
    borderRadius: 18,
    backgroundColor: '#fffefa',
  },
  offersPanelWide: {
    flex: 1,
    marginTop: 0,
    padding: 20,
  },
  offersTitle: {
    color: '#111813',
    fontSize: 19,
    fontWeight: '800',
  },
  offerTypes: {
    flexDirection: 'row',
    marginTop: 16,
  },
  offerTypeButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f0eee9',
  },
  offerTypeSelected: {
    borderBottomColor: '#ff5a37',
  },
  offerTypeText: {
    color: '#68716b',
    fontSize: 10,
    fontWeight: '800',
  },
  offerTypeTextSelected: {
    color: '#111813',
  },
  offerSubtext: {
    color: '#7a827c',
    fontSize: 10,
    marginTop: 4,
  },
  offerCard: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e3ded5',
    borderRadius: 16,
  },
  offerEyebrow: {
    color: '#c84326',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  offerDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
  },
  offerIcon: {
    color: '#f04f2b',
    fontSize: 30,
    fontWeight: '800',
  },
  offerValue: {
    flex: 1,
    color: '#20291f',
    fontSize: 15,
    fontWeight: '700',
  },
  offerDivider: {
    height: 1,
    backgroundColor: '#ebe7df',
  },
  addOnTitle: {
    color: '#c84326',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 12,
  },
  offerFootnote: {
    color: '#68716b',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  offerDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginTop: 14,
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ff5a37',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#d6d7d3',
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  bookButton: {
    minHeight: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff5a37',
    borderRadius: 10,
  },
  bookButtonText: {
    color: '#e84325',
    fontSize: 14,
    fontWeight: '700',
  },
  payButton: {
    minHeight: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4b24',
    borderRadius: 10,
  },
  payButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
  },
});
