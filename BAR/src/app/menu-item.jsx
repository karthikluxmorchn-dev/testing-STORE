import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function getParam(value) {
  return Array.isArray(value) ? value[0] : value;
}

export default function MenuItemScreen() {
  const params = useLocalSearchParams();
  const name = getParam(params.name);
  const detail = getParam(params.detail);
  const price = getParam(params.price);
  const category = getParam(params.category);
  const image = getParam(params.image);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back to the menu"
          onPress={() => router.back()}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>BACK TO MENU</Text>
        </Pressable>

        {image ? (
          <Image
            accessibilityLabel={name ? `${name} photo` : 'Menu item photo'}
            source={{ uri: `https://images.unsplash.com/${image}?auto=format&fit=crop&w=1200&h=900&q=85` }}
            style={styles.itemImage}
          />
        ) : null}

        <View style={styles.itemInfo}>
          <Text style={styles.eyebrow}>{category || 'BAR MENU'}</Text>
          <Text style={styles.title}>{name || 'Menu item'}</Text>
          <Text style={styles.detail}>{detail || 'Ask our team for details.'}</Text>
          {price ? <Text style={styles.price}>{price}</Text> : null}
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
  itemImage: {
    width: '100%',
    height: 300,
    borderRadius: 4,
    backgroundColor: '#d7d4ca',
  },
  itemInfo: {
    paddingTop: 24,
  },
  eyebrow: {
    color: '#788078',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    color: '#1d291f',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 8,
  },
  detail: {
    color: '#727b71',
    fontSize: 14,
    marginTop: 8,
  },
  price: {
    color: '#26372b',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 20,
  },
  pressed: {
    opacity: 0.78,
  },
});
