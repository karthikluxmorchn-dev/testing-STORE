import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function getParam(value) {
  return Array.isArray(value) ? value[0] : value;
}

export default function VenueDetailScreen() {
  const params = useLocalSearchParams();
  const name = getParam(params.name);
  const rating = getParam(params.rating);
  const cuisines = getParam(params.cuisines);
  const location = getParam(params.location);
  const image = getParam(params.image);
  const offer = getParam(params.offer);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
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
            accessibilityLabel={name ? `${name} venue` : 'Venue photo'}
            source={{ uri: `https://images.unsplash.com/${image}?auto=format&fit=crop&w=1400&h=900&q=85` }}
            style={styles.venueImage}
          />
        ) : null}

        {offer ? (
          <View style={styles.offerBadge}>
            <Text style={styles.offerText}>{offer}</Text>
          </View>
        ) : null}

        <View style={styles.details}>
          <Text style={styles.eyebrow}>BAR & DINING</Text>
          <Text style={styles.name}>{name || 'Venue'}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>{rating || '--'} ★</Text>
            <Text style={styles.type}>DINING</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.label}>CUISINE</Text>
          <Text style={styles.value}>{cuisines || 'Ask the venue for details.'}</Text>
          <Text style={styles.label}>LOCATION</Text>
          <Text style={styles.value}>{location || 'Location unavailable'}</Text>
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
    minHeight: 56,
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
    height: 320,
    borderRadius: 6,
    backgroundColor: '#d7d4ca',
  },
  offerBadge: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#2670e8',
    borderRadius: 4,
  },
  offerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
  },
  details: {
    paddingTop: 22,
  },
  eyebrow: {
    color: '#788078',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  name: {
    color: '#1d291f',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 7,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 12,
  },
  rating: {
    overflow: 'hidden',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    paddingHorizontal: 7,
    paddingVertical: 4,
    backgroundColor: '#168345',
    borderRadius: 4,
  },
  type: {
    color: '#68716b',
    fontSize: 11,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#d7d4ca',
  },
  label: {
    color: '#788078',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 14,
  },
  value: {
    color: '#26372b',
    fontSize: 15,
    marginTop: 5,
  },
  pressed: {
    opacity: 0.78,
  },
});
