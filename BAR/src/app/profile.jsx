import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  ink: '#12231D',
  paper: '#F3EBDD',
  muted: '#C4C1B2',
  accent: '#D9F56D',
  panel: '#1C332B',
};

export default function ProfileScreen() {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Link href="/" asChild>
                <Pressable><Text style={styles.wordmark}>BAR.</Text></Pressable>
              </Link>
              <Text style={styles.headerNote}>YOUR NIGHT AT BAR</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>GOOD TO HAVE YOU</Text>
              <Text accessibilityRole="header" style={styles.title}>Welcome in.</Text>
              <Text style={styles.description}>
                A good night is made of good company, a favorite drink, and room for one more.
              </Text>
            </View>

            <View style={styles.guestPanel}>
              <View style={styles.guestTopline}>
                <Text style={styles.guestLabel}>GUEST PROFILE</Text>
                <View style={styles.guestBadge}>
                  <Text style={styles.guestBadgeText}>VISITOR</Text>
                </View>
              </View>
              <Text style={styles.guestTitle}>Make yourself at home.</Text>
              <Text style={styles.guestDescription}>
                Browse the menu and discover your next favorite pour.
              </Text>
              <Link href="/explore" asChild>
                <Pressable style={({ pressed }) => [styles.menuLink, pressed && styles.pressed]}>
                  <Text style={styles.menuLinkText}>SEE THE MENU</Text>
                  <Text style={styles.menuLinkArrow}>↗</Text>
                </Pressable>
              </Link>
            </View>

            <View style={styles.footer}>
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
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  content: {
    width: '100%',
    maxWidth: 960,
    paddingHorizontal: 24,
  },
  header: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3A4B40',
  },
  wordmark: {
    color: colors.paper,
    fontSize: 23,
    fontWeight: '900',
  },
  headerNote: {
    color: colors.muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  intro: {
    paddingTop: 58,
    paddingBottom: 36,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  title: {
    color: colors.paper,
    fontFamily: 'Georgia',
    fontSize: 48,
    lineHeight: 58,
    letterSpacing: 0,
    marginTop: 8,
  },
  description: {
    maxWidth: 440,
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  guestPanel: {
    padding: 22,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: '#496050',
  },
  guestTopline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guestLabel: {
    color: colors.muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  guestBadge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  guestBadgeText: {
    color: colors.ink,
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
  },
  guestTitle: {
    color: colors.paper,
    fontFamily: 'Georgia',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
    marginTop: 32,
  },
  guestDescription: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
  },
  menuLink: {
    minHeight: 44,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 14,
    marginTop: 22,
    backgroundColor: colors.accent,
  },
  menuLinkText: {
    color: colors.ink,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  menuLinkArrow: {
    color: colors.ink,
    fontSize: 17,
  },
  pressed: {
    opacity: 0.8,
  },
  footer: {
    minHeight: 72,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3A4B40',
    marginTop: 36,
  },
  footerText: {
    color: colors.muted,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
});