"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Facebook, Heart, Link, Linkedin, Share2, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ActionBar() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Lien copié !");
    } catch (err) {
      console.error("Error copying link:", err);
      toast.error("Erreur lors de la copie du lien");
    }
  };

  const handleSocialShare = (platform: string) => {
    // Convertir l'URL localhost en URL de production pour le partage
    const currentUrl = window.location.href;
    const productionUrl = currentUrl.replace('localhost:3105', 'techins8.com');
    const url = encodeURIComponent(productionUrl);
    const title = encodeURIComponent(document.title || "TechIns8 - Article");
    const description = encodeURIComponent("Découvrez cet article sur TechIns8, votre partenaire en recrutement tech");
    const source = encodeURIComponent("TechIns8");

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/dialog/share?app_id=966242223397117&href=${url}&display=popup&quote=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}&source=${source}`;
        break;
    }

    const width = 600;
    const height = 400;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      shareUrl,
      "Partager",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
  };

  return (
    <div className="flex justify-between items-center gap-2 mb-8">
      <div className="flex items-center gap-6">
        <button
          onClick={handleLike}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
            isLiked
              ? "bg-red-50 text-red-500 hover:bg-red-100"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          )}
        >
          <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 bg-gray-100 hover:bg-gray-200 text-gray-700">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Partager</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <DropdownMenuItem
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <Link className="w-4 h-4" />
              <span>Copier le lien</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleSocialShare("twitter")}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span>Partager sur X</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleSocialShare("facebook")}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Partager sur Facebook</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleSocialShare("linkedin")}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Partager sur LinkedIn</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
