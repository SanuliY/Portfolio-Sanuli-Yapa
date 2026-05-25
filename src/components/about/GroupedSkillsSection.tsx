import { motion } from 'framer-motion';
import { developerInfo } from '@/data/developer';
import { SkillIcon } from './SkillIcon';

function SkillRow({
  name,
  type,
}: {
  name: string;
  type: 'tech' | 'soft';
}) {
  return (
    <li className="flex items-center gap-3 py-2.5 px-3 rounded-md bg-accent/50 border border-border/40 hover:bg-accent/80 transition-colors">
      <SkillIcon name={name} type={type} />
      <span className="text-sm font-bold text-foreground">{name}</span>
    </li>
  );
}

export function GroupedSkillsSection() {
  return (
    <div className="space-y-14 lg:space-y-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {developerInfo.skills.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: groupIndex * 0.06 }}
            className="p-7 lg:p-8 rounded-lg border border-border bg-background space-y-5 min-h-[200px]"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground pb-1 border-b border-border/60">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <SkillRow key={item} name={item} type="tech" />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="max-w-xl mx-auto w-full p-7 lg:p-8 rounded-lg border border-border bg-background space-y-5"
      >
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground pb-1 border-b border-border/60">
          Soft Skills
        </h3>
        <ul className="flex flex-col gap-1">
          {developerInfo.softSkills.map((skill) => (
            <SkillRow key={skill} name={skill} type="soft" />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
