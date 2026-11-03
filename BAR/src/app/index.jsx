import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  ink: '#12231D',
  panel: '#1C332B',
  paper: '#F3EBDD',
  muted: '#C4C1B2',
  acid: '#D9F56D',
  rust: '#B65C42',
};

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const heroHeight = Math.min(Math.max(height * 0.42, 390), 480);

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.header}>
              <View>
                <Text style={styles.wordmark}>
                  BAR<Text style={styles.wordmarkDot}>.</Text>
                </Text>
                <Text style={styles.headerCaption}>COCKTAILS / LATE NIGHTS</Text>
              </View>
              <View style={styles.openBadge}>
                <View style={styles.openDot} />
                <Text style={styles.openLabel}>OPEN TONIGHT</Text>
              </View>
            </View>

            <View style={[styles.hero, { height: heroHeight }]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1800&q=85',
                }}
                contentFit="cover"
                transition={500}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.heroShade} />
              <View style={styles.heroTopline}>
                <Text style={styles.heroEyebrow}>YOUR NEIGHBORHOOD COCKTAIL ROOM</Text>
                <Text style={styles.heroIndex}>NO. 01 / EVERY NIGHT</Text>
              </View>
              <View style={styles.heroCopy}>
                <Text style={styles.heroKicker}>GOOD DRINKS. GOOD COMPANY.</Text>
                <Text accessibilityRole="header" style={styles.heroTitle}>Stay for{ '\n' }one more.</Text>
                <Text style={styles.heroDescription}>
                  A little candlelight, something cold in your glass, and nowhere else to be.
                </Text>
                <Link href="/explore" asChild>
                  <Pressable style={({ pressed }) => pressed && styles.pressed}>
                    <View style={styles.primaryButton}>
                      <Text style={styles.primaryButtonText}>EXPLORE THE MENU</Text>
                      <Text style={styles.buttonArrow}>↗</Text>
                    </View>
                  </Pressable>
                </Link>
              </View>
              <View style={styles.heroFoot}>
                <Text style={styles.heroFootText}>WALK IN, STAY A WHILE</Text>
                <Text style={styles.heroFootText}>GOOD UNTIL LATE</Text>
              </View>
            </View>

            <View style={styles.detailsStrip}>
              <View style={styles.detailBlock}>
                <Text style={styles.detailLabel}>TONIGHT</Text>
                <Text style={styles.detailValue}>4 PM — LATE</Text>
              </View>
              <View style={styles.detailDivider} />
              <View style={styles.detailBlock}>
                <Text style={styles.detailLabel}>THE MOOD</Text>
                <Text style={styles.detailValue}>LOW LIGHT / HIGH SPIRITS</Text>
              </View>
              <View style={styles.detailDivider} />
              <View style={styles.detailBlock}>
                <Text style={styles.detailLabel}>THE PLAN</Text>
                <Text style={styles.detailValue}>ONE MORE ROUND</Text>
              </View>
            </View>

            <View style={styles.favorites}>
              <View style={styles.sectionHeading}>
                <View>
                  <Text style={styles.sectionEyebrow}>A GOOD PLACE TO START</Text>
                  <Text accessibilityRole="header" style={styles.sectionTitle}>House favorites</Text>
                </View>
                <Link href="/explore" asChild>
                  <Pressable style={styles.textLink}>
                    <Text style={styles.textLinkLabel}>FULL MENU</Text>
                    <Text style={styles.textLinkArrow}>↗</Text>
                  </Pressable>
                </Link>
              </View>
              <View style={styles.drinkGrid}>
                <View style={[styles.drinkCard, styles.drinkCardRust]}>
                  <Text style={styles.drinkNumber}>01 / HOUSE CLASSIC</Text>
                  <Text style={styles.drinkName}>After Hours</Text>
                  <Text style={styles.drinkDescription}>Rye, amaro, sweet vermouth, orange</Text>
                </View>
                <View style={[styles.drinkCard, styles.drinkCardOlive]}>
                  <Text style={styles.drinkNumber}>02 / BRIGHT & EASY</Text>
                  <Text style={styles.drinkName}>Green Light</Text>
                  <Text style={styles.drinkDescription}>Gin, cucumber, lime, garden herbs</Text>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerBrand}>BAR.</Text>
              <Text style={styles.footerText}>COME AS YOU ARE. LEAVE WHEN YOU LIKE.</Text>
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
    backgroundColor: colors.ink,
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
    maxWidth: 1120,
    paddingHorizontal: 20,
  },
  header: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wordmark: {
    color: colors.paper,
    fontSize: 24,
    lineHeight: 27,
    fontWeight: '900',
    letterSpacing: 0,
  },
  wordmarkDot: {
    color: colors.acid,
  },
  headerCaption: {
    color: colors.muted,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  openBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#52624E',
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  openDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.acid,
  },
  openLabel: {
    color: colors.paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  hero: {
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 22,
    backgroundColor: '#34483B',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7, 18, 14, 0.47)',
  },
  heroTopline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  heroEyebrow: {
    color: colors.paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  heroIndex: {
    color: colors.paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  heroCopy: {
    alignItems: 'flex-start',
    maxWidth: 540,
  },
  heroKicker: {
    color: colors.acid,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    marginBottom: 12,
  },
  heroTitle: {
    color: colors.paper,
    fontFamily: 'Georgia',
    fontSize: 58,
    lineHeight: 58,
    fontWeight: '700',
    letterSpacing: 0,
  },
  heroDescription: {
    color: colors.paper,
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 340,
    marginTop: 16,
    marginBottom: 22,
  },
  primaryButton: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    backgroundColor: colors.acid,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  buttonArrow: {
    color: colors.ink,
    fontSize: 19,
    lineHeight: 21,
  },
  heroFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  heroFootText: {
    color: colors.paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  detailsStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#3A4B40',
  },
  detailBlock: {
    flex: 1,
    gap: 8,
  },
  detailDivider: {
    width: 1,
    backgroundColor: '#3A4B40',
  },
  detailLabel: {
    color: colors.acid,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  detailValue: {
    color: colors.paper,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  favorites: {
    paddingTop: 38,
    paddingBottom: 34,
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 16,
    marginBottom: 20,
  },
  sectionEyebrow: {
    color: colors.acid,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  sectionTitle: {
    color: colors.paper,
    fontFamily: 'Georgia',
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: 0,
  },
  textLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  textLinkLabel: {
    color: colors.paper,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textLinkArrow: {
    color: colors.acid,
    fontSize: 16,
  },
  drinkGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  drinkCard: {
    flex: 1,
    minHeight: 148,
    justifyContent: 'space-between',
    padding: 18,
  },
  drinkCardRust: {
    backgroundColor: colors.rust,
  },
  drinkCardOlive: {
    backgroundColor: '#48543A',
  },
  drinkNumber: {
    color: colors.paper,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  drinkName: {
    color: colors.paper,
    fontFamily: 'Georgia',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0,
  },
  drinkDescription: {
    color: colors.paper,
    fontSize: 11,
    lineHeight: 16,
  },
  footer: {
    minHeight: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3A4B40',
  },
  footerBrand: {
    color: colors.paper,
    fontSize: 18,
    fontWeight: '900',
  },
  footerText: {
    color: colors.muted,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  pressed: {
    opacity: 0.82,
  },
});
