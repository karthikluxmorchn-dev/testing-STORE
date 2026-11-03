import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ink = '#12231D';
const paper = '#F3EBDD';
const muted = '#B9B5A7';
const accent = '#D9F56D';

const cocktails = [
  { name: 'After Hours', ingredients: 'Rye whiskey, amaro, sweet vermouth, orange', price: '$18' },
  { name: 'Green Light', ingredients: 'Gin, cucumber, lime, garden herbs', price: '$17' },
  { name: 'Velvet Rope', ingredients: 'Tequila, blood orange, ancho chile, lime', price: '$18' },
  { name: 'Soft Landing', ingredients: 'Dark rum, pineapple, toasted coconut, bitters', price: '$17' },
  { name: 'No Proof', ingredients: 'Seedlip, verjus, blackberry, rosemary', price: '$14' },
];

export default function MenuScreen() {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.topline}>
              <Link href="/" asChild>
                <Pressable><Text style={styles.wordmark}>BAR.</Text></Pressable>
              </Link>
              <Text style={styles.toplineNote}>DRINK WELL / STAY LATE</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>POURED WITH INTENTION</Text>
              <Text accessibilityRole="header" style={styles.title}>The good stuff.</Text>
              <Text style={styles.introText}>
                Familiar favorites, a few new friends, and something for everyone at the table.
              </Text>
            </View>

            <View style={styles.menuSection}>
              <View style={styles.sectionHeading}>
                <Text style={styles.sectionTitle}>House cocktails</Text>
                <Text style={styles.sectionMeta}>01 — 05</Text>
              </View>
              {cocktails.map((cocktail, index) => (
                <View key={cocktail.name} style={styles.menuRow}>
                  <Text style={styles.rowNumber}>{String(index + 1).padStart(2, '0')}</Text>
                  <View style={styles.drinkCopy}>
                    <Text style={styles.drinkName}>{cocktail.name}</Text>
                    <Text style={styles.ingredients}>{cocktail.ingredients}</Text>
                  </View>
                  <Text style={styles.price}>{cocktail.price}</Text>
                </View>
              ))}
            </View>

            <View style={styles.notePanel}>
              <Text style={styles.noteLabel}>A LITTLE SOMETHING ON THE SIDE</Text>
              <Text style={styles.noteTitle}>Good company pairs with anything.</Text>
              <Text style={styles.noteCopy}>Ask your bartender about tonight&apos;s snacks and pours.</Text>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>PLEASE DRINK THOUGHTFULLY.</Text>
              <Link href="/" asChild>
                <Pressable style={styles.backLink}>
                  <Text style={styles.backLinkText}>BACK HOME</Text>
                  <Text style={styles.backArrow}>↗</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: ink,
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 116,
  },
  content: {
    width: '100%',
    maxWidth: 960,
    paddingHorizontal: 24,
  },
  topline: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3A4B40',
  },
  wordmark: {
    color: paper,
    fontSize: 23,
    fontWeight: '900',
  },
  toplineNote: {
    color: muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  intro: {
    paddingTop: 54,
    paddingBottom: 40,
  },
  eyebrow: {
    color: accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: paper,
    fontFamily: 'Georgia',
    fontSize: 52,
    lineHeight: 62,
    letterSpacing: 0,
    marginTop: 8,
  },
  introText: {
    maxWidth: 440,
    color: muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  menuSection: {
    borderTopWidth: 1,
    borderTopColor: '#3A4B40',
  },
  sectionHeading: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: paper,
    fontFamily: 'Georgia',
    fontSize: 28,
    letterSpacing: 0,
  },
  sectionMeta: {
    color: accent,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  menuRow: {
    minHeight: 88,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: '#3A4B40',
  },
  rowNumber: {
    width: 26,
    color: accent,
    fontSize: 9,
    fontWeight: '700',
  },
  drinkCopy: {
    flex: 1,
    gap: 5,
  },
  drinkName: {
    color: paper,
    fontFamily: 'Georgia',
    fontSize: 21,
    lineHeight: 26,
    letterSpacing: 0,
  },
  ingredients: {
    color: muted,
    fontSize: 11,
    lineHeight: 16,
  },
  price: {
    color: paper,
    fontSize: 12,
    fontWeight: '700',
  },
  notePanel: {
    backgroundColor: '#B65C42',
    padding: 22,
    marginTop: 38,
  },
  noteLabel: {
    color: paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  noteTitle: {
    color: paper,
    fontFamily: 'Georgia',
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 0,
    marginTop: 12,
  },
  noteCopy: {
    color: paper,
    fontSize: 12,
    marginTop: 8,
  },
  footer: {
    minHeight: 74,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: muted,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
  },
  backLinkText: {
    color: paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  backArrow: {
    color: accent,
    fontSize: 16,
  },
});
