import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
} from 'expo-router/ui';
import { Pressable, View, StyleSheet, Text } from 'react-native';

import { MaxContentWidth, Spacing } from '@/constants/theme';

const colors = {
  ink: '#12231D',
  panel: '#1C332B',
  paper: '#F3EBDD',
  muted: '#C4C1B2',
  accent: '#D9F56D',
};

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Menu</TabButton>
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabButton>Profile</TabButton>
          </TabTrigger>

        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.tabButtonView, isFocused && styles.tabButtonSelected]}>
        <Text style={[styles.tabButtonText, isFocused && styles.tabButtonTextSelected]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export function CustomTabList(props) {
  return (
    <View {...props} style={[styles.tabListContainer, props.style]}>
      <View style={styles.innerContainer}>
        <Text style={styles.brandText}>BAR / COCKTAIL ROOM</Text>

        {props.children}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    bottom: 12,
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 10,
  },
  innerContainer: {
    width: '100%',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: '#496050',
  },
  brandText: {
    marginRight: 'auto',
    color: colors.muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 3,
  },
  tabButtonSelected: {
    backgroundColor: colors.accent,
  },
  tabButtonText: {
    color: colors.paper,
    fontSize: 11,
    fontWeight: '600',
  },
  tabButtonTextSelected: {
    color: colors.ink,
    fontWeight: '700',
  },
});
