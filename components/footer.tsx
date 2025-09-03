"use client";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, ArrowUpRight, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: "Home", href: "#home" },
      { name: "Collections", href: "#collections" },
      { name: "Projects", href: "#materials" },
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#newsletter" },
    ],

  };

  const socialLinks = [
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dextera-dei-b9a9b427b/recent-activity/all/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/dexteradei_?s=11&t=_nSeUtxVF0S56gtu-QBxlw",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100093706063512",
    },
    { name: "Mail", icon: Mail, href: "mailto:business@dexteradei.com" },
  ];

  return (
    <footer className="bg-white/[0.02] border-t border-white/[0.02]">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="md:flex justify-between items-start gap-12 lg:gap-16 mb-12">
          <div className="mb-6 md:mb-0 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Dextera Dei
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Archtectural Artistry and Craftmanship for the discerning
                client.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="">
            <div className="grid grid-cols-1  gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3 flex flex-wrap">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © Dextera Dei Ltd 2024. All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
}
