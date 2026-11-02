// AVTOMATIK YASALGAN FAYL — qo'lda tahrirlamang.
// Manba: scripts/gen-auto-posts-index.mjs (npm run blog:index).
import type { BlogPost } from "../types";
import { post as p0 } from "./auto/fragment-anonim-raqam-sotish-sotib-olish";
import { post as p1 } from "./auto/fragment-kyc-verifikatsiya-bekor-qilindi";

/** Avtoblogyoz qo'shgan maqolalar — lib/blog/posts/auto/ dagi har bir fayl. */
export const POSTS_AUTO: BlogPost[] = [p0, p1];
